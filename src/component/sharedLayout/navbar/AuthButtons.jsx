"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Link
          href="/my-profile"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 bg-[#064E3B] flex items-center justify-center shrink-0">
            {data.user.image ? (
              <Image
                src={data.user.image}
                alt={data.user.name}
                width={32}
                height={32}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-white text-sm font-semibold">
                {data.user.name?.[0]?.toUpperCase()}
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {data.user.name}
          </span>
        </Link>

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
