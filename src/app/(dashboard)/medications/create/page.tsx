import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import MedicationsModal from "@/app/ui/forms/Medications";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Show Medication", href: "/medications" },
          {
            label: "Add Medication",
            href: "/medications/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <MedicationsModal />
    </main>
  );
}
