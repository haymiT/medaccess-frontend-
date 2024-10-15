// import Form from "@/app/ui/invoices/create-form";
import CreateRoleModal from "@/app/_components/CreateRole";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Role Management", href: "/rbac/role-management" },
          {
            label: "Create Role",
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
