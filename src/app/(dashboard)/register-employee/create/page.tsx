import RegisterEmployeeForm from "@/app/ui/forms/RegisterEmployee";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Register Employee", href: "/register-employee" },
          {
            label: "Add",
            href: "/register-employee/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <RegisterEmployeeForm />
    </main>
  );
}
