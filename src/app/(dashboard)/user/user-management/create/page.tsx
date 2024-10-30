// import Form from "@/app/ui/invoices/create-form";
import CreateRoleModal from "@/app/ui/forms/CreateRole";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "User Management", href: "/user/user-management" },
          {
            label: "Create User",
            href: "/role-management/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <CreateRoleModal />
    </main>
  );
}
