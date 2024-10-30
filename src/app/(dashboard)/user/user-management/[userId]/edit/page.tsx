// 'use client'
import EditUserForm from "@/app/ui/forms/edit/EditUserForm";
import { fetchUserById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { userId: number } }) {
  const userId = params.userId;
  const user = await fetchUserById(userId);
  if (!user) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "User Management", href: "/user/user-management" },
          {
            label: "Edit User",
            href: `/user/user-management/${userId}/edit`,
            active: true,
          },
        ]}
      />
      <Divider className="-mt-2" />
      <EditUserForm user={user} />
    </main>
  );
}
