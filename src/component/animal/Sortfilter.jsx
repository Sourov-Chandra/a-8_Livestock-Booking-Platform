"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

const SORT_OPTIONS = [
  { label: "Default", value: "" },
  { label: "Price: Low → High", value: "price_asc" },
  { label: "Price: High → Low", value: "price_desc" },
  { label: "Lightest First", value: "weight_asc" },
  { label: "Heaviest First", value: "weight_desc" },
];

const TYPE_OPTIONS = ["All", "Cow", "Bull", "Goat", "Sheep"];

export default function SortFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "";
  const currentType = searchParams.get("type") || "All";

  function update(key, value) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === "All" || value === "") {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-8">
      
      <span className="flex items-center gap-1.5 text-gray-200 font-extrabold text-xs md:text-sm uppercase tracking-wider shrink-0">
        <TbAdjustmentsHorizontal className="text-base" />
        Filter
      </span>

      <div className="flex flex-wrap gap-2">
        {TYPE_OPTIONS.map((type) => (
          <button
            key={type}
            onClick={() => update("type", type)}
            className={`text-xs md:text-sm font-semibold px-4 py-1.5 rounded-full border transition-all font-mono ${
              currentType === type
                ? "bg-green-600 text-white border-green-600"
                : "bg-white text-gray-500 border-gray-200 hover:border-green-400 hover:text-green-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="hidden sm:block w-px h-5 bg-gray-200" />

      <select
        value={currentSort}
        onChange={(e) => update("sort", e.target.value)}
        className="text-xs md:text-sm font-semibold text-gray-600 border border-gray-200 rounded-full px-4 py-1.5 bg-white focus:outline-none focus:border-green-400 cursor-pointer"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
