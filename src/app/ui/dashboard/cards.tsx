import { lusitana } from '@/app/ui/fonts';
import { IconArchiveOff, IconInbox, IconUserScreen, IconUserShield } from '@tabler/icons-react';
const iconMap = {
  totalUsers: IconUserScreen,
  permissions: IconUserShield ,
  archived: IconArchiveOff,
  roles: IconInbox,
};

export default function CardWrapper() {

  return (
    <>
     <Card title="Total Users" value={12} type="totalUsers" />
      <Card title="Archived" value={5} type="archived" />
      <Card title="Roles" value={8} type="roles" />
      <Card
        title="Permissions"
        value={3}
        type="permissions"
      /> 
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'totalUsers' | 'archived' | 'roles' | 'permissions';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
