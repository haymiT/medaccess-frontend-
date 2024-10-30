import { fetchMedicationById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";
import EditMedicationForm from "@/app/ui/forms/edit/EditUserForm";

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;
  const medication = await fetchMedicationById(id);
  if (!medication) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Show Medication", href: "/medications" },
          {
            label: "Edit Medication",
            href: `/medications/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Divider className="-mt-2" />
      <EditMedicationForm medication={medication} />
    </main>
  );
}
