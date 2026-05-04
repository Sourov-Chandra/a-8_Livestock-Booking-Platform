import Link from "next/link";
import "animate.css";
import Image from "next/image";
import { IoLocationOutline, IoPulse } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { PiCowThin } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";


const featuredAnimal = {
  name: "Brahman Cross Cow",
  category: "Large Animal",
  weight: 450,
  location: "Savar, Dhaka",
  price: "19,500",
  image:
    "https://i.ibb.co.com/gZdjsyxM/pexels-fatih-turan-63325184-8460407.jpg",
};

const miniAnimals = [
    {
        emoji: <PiCowThin className="text-white" />,
        name: "Black Bengal Goat",
        price: "৳ 18,,00",
    },
    {
        emoji: <PiCowThin className="text-white" />,
        name: "Dorset Sheep",
        price: "৳ 15,000",
    },
];

const stats = [
    { value: "500+", label: "Animals Listed" },
    { value: "64", label: "Districts" },
    { value: "100%", label: "Vet Verified" },
];

export default function HeroSection() {
    return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#0a3d1f] via-[#1a6b35] to-[#052e16]">
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#fff,1px,transparent_1px)] 
                    bg-size-[30px_30px]"
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-green-300 border border-green-500/40 bg-green-500/10 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Stock{" "}
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />{" "}
              Trusted Marketplace
            </span>

            <h1 className="text-white font-serif leading-tight mb-5">
              <span className="block text-4xl md:text-5xl text-white/60 font-normal">
                Find Your
              </span>
              <span className="block text-6xl md:text-8xl font-bold tracking-tight">
                Perfect
              </span>
              <span className="block text-4xl md:text-5xl text-white/60 font-normal">
                Qurbani <em className="text-green-400 not-italic">Animal</em>
              </span>
            </h1>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md mb-8">
              Browse healthy cows, goats &amp; sheep from verified farms across
              Bangladesh — priced with fairness.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/animals"
                className="inline-flex items-center gap-2 bg-green-400 text-green-950 font-bold px-7 py-3 rounded-full hover:bg-green-300 transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/30"
              >
                Browse Animals
                <FaArrowRightLong />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 border bg-[#1a6b35] border-white/20 text-white/75 font-semibold px-7 py-3 rounded-full hover:bg-[#1a6b70] hover:text-white transition-all"
              >
                Create Account
              </Link>
            </div>

            <div className="flex gap-8 flex-wrap">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-green-400 font-serif text-3xl font-bold leading-none">
                    {s.value}
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-wider mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight animate__slow ">
            <div className="group relative rounded-2xl overflow-hidden border border-white/10  backdrop-blur-md mb-3 hover:border-green-500/30 hover:bg-white/10 transition-all duration-300 bg-[#1a6b35]">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={featuredAnimal.image}
                  alt={featuredAnimal.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width={640}
                  height={360}
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#052e16]/90 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-green-500/80 transition-colors"
                    aria-label="Add to wishlist"
                  >
                    <IoMdHeart />
                  </button>
                  <button
                    className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-green-500/80 transition-colors"
                    aria-label="Quick view"
                  >
                    <MdOutlineRemoveRedEye />
                  </button>
                </div>
              </div>

              <div className="p-5 ">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-green-400 font-mono">
                      {featuredAnimal.category}
                    </span>
                    <h3 className="text-white font-serif text-xl font-semibold mt-1 mb-1">
                      {featuredAnimal.name}
                    </h3>
                  </div>
                  <span className="text-green-400 font-bold font-serif text-lg whitespace-nowrap">
                    ৳ {featuredAnimal.price}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-3 text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    <IoLocationOutline />
                    {featuredAnimal.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaPlus />
                    {featuredAnimal.weight} kg
                  </span>
                </div>
              </div>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#052e16]/90 border border-green-500/40 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available Now
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 bg-[#1a6b35]">
              {miniAnimals.map((m) => (
                <div
                  key={m.name}
                  className="group flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3 hover:bg-green-500/10 hover:border-green-500/25 hover:-translate-y-0.5 transition-all cursor-pointer "
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {m.emoji}
                  </span>
                  <div className="min-w-0 ">
                    <p className="text-white/85 text-sm font-semibold leading-tight truncate">
                      {m.name}
                    </p>
                    <p className="text-green-400 text-sm font-bold font-serif">
                      {m.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}
