import RegisterDrugModal from "@/app/ui/forms/RegisterDrug";
import RegisterInventoryForm from "@/app/ui/forms/RegisterInventory";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Inventory", href: "/inventory" },
          {
            label: "Register Inventory Item",
            href: "/inventory/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <RegisterInventoryForm />
    </main>
  );
}
