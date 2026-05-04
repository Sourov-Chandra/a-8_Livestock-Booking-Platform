"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function BookingForm({ animalName }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    await new Promise((res) => setTimeout(res, 800));
    toast.success(`Booking request sent for ${animalName}!`);
    e.target.reset();
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-6 sm:p-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-1">
        Book This Animal
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Fill in your details and we&apos;ll confirm your booking shortly.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              name="name"
              type="text"
              required
              placeholder="Enter your full name"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="relative">
            <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              name="phone"
              type="tel"
              required
              placeholder="+880 1XXX-XXXXXX"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Delivery Address
          </label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400 text-sm" />
            <textarea
              name="address"
              required
              rows={3}
              placeholder="Enter your delivery address"
              className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-colors resize-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg mt-2"
        >
          {loading ? "Sending Request..." : "Confirm Booking"}
        </button>
      </form>
    </div>
  );
}
