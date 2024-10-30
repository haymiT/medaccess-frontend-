// 'use client'
import EditUserForm from "@/app/ui/forms/edit/EditUserForm";
import { fetchPharmacyById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import EditPharmacyForm from "@/app/ui/forms/edit/EditUserForm";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const pharmacy = await fetchPharmacyById(id);
  if (!pharmacy) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Pharmacy", href: "/pharmacy" },
          {
            label: "Edit Pharmacy",
            href: `/pharmacy/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Divider className="-mt-2" />
      <EditPharmacyForm pharmacy={pharmacy}/>
    </main>
  );
}
