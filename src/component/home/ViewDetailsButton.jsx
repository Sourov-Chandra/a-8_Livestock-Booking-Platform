"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ViewDetailsButton = ({ id }) => {
  const { data } = useSession();
  const router = useRouter();

  const handleClick = () => {
    if (!data) {
      toast.error("Please log in to view animal details!");
      return;
    }
    router.push(`/animals/${id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="text-xs font-bold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
    >
      View Details
    </button>
  );
}

export default ViewDetailsButton