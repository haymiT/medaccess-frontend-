import { fetchInventoryById, fetchUserById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import EditInventoryForm from "@/app/ui/forms/edit/EditInventory";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const inventoryData = await fetchInventoryById(id);

  // Extract the first inventory item
  const inventory = inventoryData && Array.isArray(inventoryData) ? inventoryData[0] : null;

  if (!inventory) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Show Inventory", href: "/inventory" },
          {
            label: "Edit Inventory",
            href: `/inventory/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Divider className="-mt-2" />
      <EditInventoryForm inventory={inventory} />
    </main>
  );
}
