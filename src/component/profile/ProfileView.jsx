"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import Image from "next/image";

const ProfileView = ({ user }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-24 bg-linear-to-r from-[#064E3B] to-[#065F46]" />

      <div className="flex flex-col items-center -mt-12 px-6 pb-8">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#064E3B] text-white text-3xl font-bold">
              {user?.name?.[0]?.toUpperCase()}
            </div>
          )}
        </div>

        <h1 className="mt-4 text-xl font-bold text-gray-900">{user?.name}</h1>
        <p className="text-sm text-gray-500 mt-1">{user?.email}</p>

        <div className="w-full mt-6 space-y-3">
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-gray-400 text-sm">Name</span>
            <span className="ml-auto text-sm font-medium text-gray-800">
              {user?.name}
            </span>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-gray-400 text-sm">Email</span>
            <span className="ml-auto text-sm font-medium text-gray-800">
              {user?.email}
            </span>
          </div>
        </div>

        <Link
          href="/update-profile"
          className="mt-6 w-full text-center text-sm font-medium text-white bg-[#064E3B] px-4 py-2.5 rounded-xl hover:bg-[#065F46] transition-colors"
        >
          Edit Profile
        </Link>

        <button
          onClick={handleLogout}
          className="mt-3 w-full text-center text-sm font-medium text-white bg-red-500 px-4 py-2.5 rounded-xl hover:bg-red-600 transition-colors"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default ProfileView