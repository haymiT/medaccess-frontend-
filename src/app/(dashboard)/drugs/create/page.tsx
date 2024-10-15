import RegisterDrugModal from "@/app/_components/RegisterDrug";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Show Drugs", href: "/drugs" },
          {
            label: "Register Drug",
            href: "/drugs/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <RegisterDrugModal />
    </main>
  );
}
