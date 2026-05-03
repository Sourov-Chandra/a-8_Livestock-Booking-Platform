import Link from "next/link";
import Image from "next/image"; 
import "animate.css";
import { getFeaturedAnimals } from "@/lib/data";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoStopwatch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";


const featured = getFeaturedAnimals();

const typeStyles = {
  Cow: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    border: "border-amber-200",
    dot: "bg-amber-400",
  },
  Goat: {
    bg: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    dot: "bg-sky-400",
  },
  Sheep: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    border: "border-violet-200",
    dot: "bg-violet-400",
  },
  Bull: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    dot: "bg-rose-400",
  },
};

const FeaturedAnimals = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Featured <em className="text-green-600 not-italic">Animals</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((animal, i) => {
            const style = typeStyles[animal.type] || typeStyles["Cow"];
            return (
              <div
                key={animal.id}
                className="animate__animated animate__fadeInUp group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >

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
                    <Link
                      href={`/animals/${animal.id}`}
                      className="text-xs font-bold bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-linear-to-r from-green-700 to-green-600 px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-serif text-xl font-bold leading-tight">
              Ready to find your Cattle animal?
            </p>
            <p className="text-green-200 text-sm mt-0.5">
              Browse all 8 animals across Bangladesh - cows, goats, sheep &amp;
              more.
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
      </div>
    </section>
  );
};

export default FeaturedAnimals;
