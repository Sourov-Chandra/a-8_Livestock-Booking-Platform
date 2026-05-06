'use client'

import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import { BsCalendar, BsTag } from "react-icons/bs";
import { FaWeightHanging } from "react-icons/fa";
import { formatPrice } from "@/lib/data";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";


const AnimalCard = ({ animal }) => {
  
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { data } = useSession();

  const handleViewDetails = () => {
    if (!data) {
      toast.error("Please log in to view animal details!");
      // router.push("/login");
      return;
    }
    setIsLoading(true)
    router.push(`/animals/${animal.id}`);
  };
 

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />

        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
              animal.category === "Large Animal"
                ? "bg-emerald-500/90 text-white"
                : "bg-amber-500/90 text-white"
            }`}
          >
            {animal.category}
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-800 backdrop-blur-md shadow-sm">
            {animal.type}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-4">
          <p className="text-2xl font-bold text-white">
            {formatPrice(animal.price)}
          </p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
            {animal.name}
          </h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <BsTag className="w-4 h-4" />
            {animal.breed}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-emerald-50 transition-colors">
            <FaWeightHanging className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
            <p className="text-xs text-gray-500">Weight</p>
            <p className="text-sm font-semibold text-gray-900">
              {animal.weight} kg
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-emerald-50 transition-colors">
            <BsCalendar className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
            <p className="text-xs text-gray-500">Age</p>
            <p className="text-sm font-semibold text-gray-900">
              {animal.age} yrs
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center hover:bg-emerald-50 transition-colors">
            <FiMapPin className="w-5 h-5 mx-auto mb-1 text-emerald-600" />
            <p className="text-xs text-gray-500">Location</p>
            <p
              className="text-sm font-semibold text-gray-900 truncate"
              title={animal.location}
            >
              {animal.location.split(",")[0]}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {animal.description}
        </p>

        <button
          onClick={handleViewDetails}
          disabled={isLoading}
          className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <BsTag className="w-4 h-4" />
              View Details
            </>
          )}
        </button>
      </div>

      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-emerald-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default AnimalCard;
