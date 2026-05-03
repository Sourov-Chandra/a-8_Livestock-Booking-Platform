import ScrollAnimate from "@/component/home/ScrollAnimate";
import { TbShieldCheck } from "react-icons/tb";

const breeds = [
  {
    rank: "01",
    name: "Brahman Cross",
    type: "Cow",
    origin: "Dhaka",
    avgWeight: "400–500 kg",
    avgPrice: "৳ 90,000",
    demand: 5,
    accentBg: "#f0fdf4",
    accentBorder: "#bbf7d0",
    accentText: "#15803d",
    rankColor: "#15803d",
  },
  {
    rank: "02",
    name: "Black Bengal Goat",
    type: "Goat",
    origin: "Cumilla",
    avgWeight: "15–25 kg",
    avgPrice: "৳ 18,000",
    demand: 4,
    accentBg: "#eff6ff",
    accentBorder: "#bfdbfe",
    accentText: "#1d4ed8",
    rankColor: "#1d4ed8",
  },
  {
    rank: "03",
    name: "Shahiwal Cow",
    type: "Cow",
    origin: "Rajshahi",
    avgWeight: "350–450 kg",
    avgPrice: "৳ 75,000",
    demand: 4,
    accentBg: "#fefce8",
    accentBorder: "#fde68a",
    accentText: "#a16207",
    rankColor: "#a16207",
  },
  {
    rank: "04",
    name: "Dorset Sheep",
    type: "Sheep",
    origin: "Sylhet",
    avgWeight: "40–60 kg",
    avgPrice: "৳ 22,000",
    demand: 3,
    accentBg: "#f5f3ff",
    accentBorder: "#ddd6fe",
    accentText: "#6d28d9",
    rankColor: "#6d28d9",
  },
  {
    rank: "05",
    name: "Hariana Bull",
    type: "Bull",
    origin: "Khulna",
    avgWeight: "500–650 kg",
    avgPrice: "৳ 1,20,000",
    demand: 4,
    accentBg: "#fff1f2",
    accentBorder: "#fecdd3",
    accentText: "#be123c",
    rankColor: "#be123c",
  },
];

export default function TopBreeds() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-linear-to-br from-[#441450] via-[#1a516b] to-[#075e74]">
    
      <div
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollAnimate
          animation="fadeInDown"
          delay="0s"
          className="mb-12 text-center"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-50 leading-tight">
              Top Breeds This{" "}
              <em className="text-red-600 not-italic">Season</em>
            </h2>
            <p className="text-gray-50 text-sm mt-3 max-w-md mx-auto">
              Ranked by buyer demand across Bangladesh
            </p>
          </div>
        </ScrollAnimate>

        <div className="flex flex-col gap-3">
          {breeds.map((breed, i) => (
            <ScrollAnimate key={breed.rank} delay={`${0.1 + i * 0.1}s`}>
              <div className="group flex items-center gap-5 bg-white/95 backdrop-blur-sm rounded-2xl border border-white/10 px-6 py-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
            
                <span
                  className="font-mono text-3xl font-black shrink-0 w-12 leading-none"
                  style={{ color: breed.rankColor, opacity: 0.25 }}
                >
                  {breed.rank}
                </span>

                <span
                  className="hidden sm:inline-block shrink-0 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full font-mono"
                  style={{
                    background: breed.accentBg,
                    color: breed.accentText,
                    border: `1px solid ${breed.accentBorder}`,
                  }}
                >
                  {breed.type}
                </span>

                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug truncate">
                    {breed.name}
                  </h3>
                  <p className="text-gray-500 text-xs font-mono mt-0.5">
                    {breed.origin}
                  </p>
                </div>

                <div className="hidden md:block text-center shrink-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                    Weight
                  </p>
                  <p className="text-gray-800 font-semibold text-sm mt-0.5">
                    {breed.avgWeight}
                  </p>
                </div>

                <div className="hidden sm:flex flex-col items-center gap-1.5 shrink-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                    Demand
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, di) => (
                      <span
                        key={di}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background:
                            di < breed.demand ? breed.rankColor : "#e5e7eb",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                    Avg Price
                  </p>
                  <p
                    className="font-serif font-bold text-base mt-0.5"
                    style={{ color: breed.rankColor }}
                  >
                    {breed.avgPrice}
                  </p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

        <ScrollAnimate delay="0.7s" className="mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-50 text-xs font-mono">
              <TbShieldCheck className="text-green-400 text-base shrink-0" />
              All breeds vet-verified · available across Bangladesh
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
