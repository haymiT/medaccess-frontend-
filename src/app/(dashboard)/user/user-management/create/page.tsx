import CreateUserModal from "@/app/ui/forms/CreateUser";
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

      <CreateUserModal />
    </main>
  );
}
