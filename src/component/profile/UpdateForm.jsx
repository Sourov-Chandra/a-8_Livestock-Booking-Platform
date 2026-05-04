"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import Image from "next/image";

export default function UpdateForm({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const image = formData.get("image");

    setLoading(true);
    const { error } = await authClient.updateUser({
      name,
      image,
    });
    setLoading(false);

    if (error) {
      toast.error(error.message || "Update failed");
    } else {
      toast.success("Profile updated successfully");
      router.push("/my-profile");
      router.refresh();
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="h-24 bg-linear-to-r from-[#064E3B] to-[#065F46]" />

      <div className="flex flex-col -mt-12 px-6 pb-8">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#064E3B] flex items-center justify-center self-center">
          {user?.image ? (
            <Image
              src={user.image}
              alt={user.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-white text-3xl font-bold">
              {user?.name?.[0]?.toUpperCase()}
            </span>
          )}
        </div>

        <h1 className="mt-4 text-xl font-bold text-gray-900 text-center">
          Edit Profile
        </h1>
        <p className="text-sm text-gray-400 text-center mt-1 mb-6">
          Update your name and photo
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              name="name"
              type="text"
              defaultValue={user?.name}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B] transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              name="image"
              type="url"
              defaultValue={user?.image ?? ""}
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B] transition-colors"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 text-sm font-medium text-gray-600 border border-gray-200 px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 text-sm font-medium text-white bg-[#064E3B] px-4 py-2.5 rounded-xl hover:bg-[#065F46] transition-colors disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Information"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}