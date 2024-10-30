// 'use client'
import EditUserForm from "@/app/ui/forms/edit/EditUserForm";
import { fetchUserById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const user = await fetchUserById(id);
  if (!user) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Register Employee", href: "/register-employee" },
          {
            label: "Edit Employee",
            href: `/register-employee/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Divider className="-mt-2" />
      
      <EditUserForm user={user} />
    </main>
  );
}
