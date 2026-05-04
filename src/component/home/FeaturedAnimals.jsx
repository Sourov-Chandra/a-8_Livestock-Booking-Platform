import Link from "next/link";
import Image from "next/image";
import { getFeaturedAnimals } from "@/lib/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoStopwatch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import ScrollAnimate from "@/component/home/ScrollAnimate";
import ViewDetailsButton from "./ViewDetailsButton";

const featured = getFeaturedAnimals();

const typeStyles = {
  Cow: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  Goat: { bg: "bg-sky-50", text: "text-sky-700", border: "border-sky-200" },
  Sheep: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
  },
  Bull: { bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-200" },
};

export default function FeaturedAnimals() {
  return (
    <section className="relative overflow-hidden py-20 px-4 bg-linear-to-r  from-[#dadd82] to-[#6878b4]">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <ScrollAnimate animation="fadeInDown" delay="0s">
            <div className="">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Featured <em className="text-green-700 not-italic">Animals</em>
              </h2>
              <p className="text-gray-700 mt-2 text-sm max-w-md ">
                Hand-picked, vet-verified animals ready for this season.
              </p>
            </div>
          </ScrollAnimate>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((animal, i) => {
            const style = typeStyles[animal.type] || typeStyles["Cow"];
            return (
              <ScrollAnimate key={animal.id} delay={`${i * 0.15}s`}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={animal.image}
                      alt={animal.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span
                      className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border font-mono ${style.bg} ${style.text} ${style.border}`}
                    >
                      {animal.type}
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-xs text-gray-400 font-mono mb-1">
                      {animal.breed} · {animal.location}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-gray-900 leading-snug mb-3">
                      {animal.name}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <IoLocationOutline />
                        {animal.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <GoStopwatch />
                        {animal.weight} kg
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider font-mono">
                          Price
                        </p>
                        <p className="font-serif text-lg font-bold text-green-700">
                          ৳ {animal.price}
                        </p>
                      </div>
                      
                      <ViewDetailsButton id={animal.id} />
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            );
          })}
        </div>

        <ScrollAnimate delay="0.6s" className="mt-14">
          <div
            className="rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{
              background: "linear-gradient(to right, #15803d, #16a34a)",
            }}
          >
            <div>
              <p className="text-white font-serif text-xl font-bold leading-tight">
                Ready to find your Cattle animal?
              </p>
              <p className="text-green-200 text-sm mt-0.5">
                Browse all 8 animals across Bangladesh — cows, goats, sheep
                &amp; more.
              </p>
            </div>
            <Link
              href="/animals"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-green-700 font-bold text-sm px-6 py-3 rounded-full hover:bg-green-50 transition-all shadow-md"
            >
              Browse All Animals
              <FaArrowRightLong />
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
}
