"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";

export default function AuthButtons() {
  const { data, isPending } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  if (isPending) {
    return <div className="w-20 h-8 bg-gray-100 animate-pulse rounded-lg" />;
  }

  if (data) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">
          Welcome, {data.user.name}
        </span>
        <button
          onClick={handleLogout}
          className="text-sm font-medium text-white bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600 transition-colors"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="text-sm font-medium text-gray-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Log in
      </Link>
      <Link
        href="/register"
        className="text-sm font-medium text-white bg-black px-4 py-1.5 rounded-lg hover:bg-gray-800 transition-colors"
      >
        Register
      </Link>
    </div>
  );
}
