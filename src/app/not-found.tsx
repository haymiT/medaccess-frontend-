import Link from "next/link";
import { IconRobotFace } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <main className="flex h-full mt-64 flex-col items-center justify-center gap-2">
      <IconRobotFace className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested page.</p>
      <Link
        href="/dashboard"
        className="mt-3 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
