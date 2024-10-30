import CreateSalesForm from "@/app/ui/forms/create/CreateSales";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { Divider } from "@nextui-org/react";

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Sell Drugs", href: "/sell-drug" },
          {
            label: "Create Sales",
            href: "/sell-drug/create",
            active: true,
          },
        ]}
      />
        <Divider className="-mt-2" />

      <CreateSalesForm />
    </main>
  );
}
