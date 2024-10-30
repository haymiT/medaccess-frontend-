import RegisterPharmacyForm from "@/app/ui/forms/RegisterPharmacy";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Pharmacy", href: "/pharmacy" },
          {
            label: "Register Pharmacy",
            href: "/pharmacy/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <RegisterPharmacyForm />
    </main>
  );
}
