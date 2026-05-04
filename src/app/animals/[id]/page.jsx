import { notFound } from "next/navigation";
import {
  FaMapPin,
  FaWeight,
  FaCalendar,
  FaPhone,
  FaLeaf,
  FaHeartbeat,
  FaArrowLeft,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaHandshake,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { formatPrice, getAnimalById } from "@/lib/data";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const animal = getAnimalById(id);

  if (!animal) {
    return { title: "Animal Not Found" };
  }

  return {
    title: `${animal.name} | Qurbani Animals`,
    description: animal.description,
  };
}

  const badges = [
    {
      icon: <FaCheckCircle className="mx-auto text-emerald-500" />,
      text: "Vet Checked",
      desc: "Health certified",
    },
    {
      icon: <FaLeaf className="mx-auto text-green-500" />,
      text: "Natural Feed",
      desc: "100% organic",
    },
    {
      icon: <FaMapMarkerAlt className="mx-auto text-blue-500" />,
      text: "Verified Location",
      desc: "Trusted farm",
    },
    {
      icon: <FaHandshake className="mx-auto text-amber-500" />,
      text: "Trusted Seller",
      desc: "4.8★ rating",
    },
  ];

  function InfoRow({ icon, label, value }) {
    return (
      <div className="flex items-start gap-3">
        <span className="text-emerald-600 mt-1 text-lg">{icon}</span>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="font-medium text-gray-900">{value}</p>
        </div>
      </div>
    );
  }

const AnimalsDetailspage = async ({ params }) => {
  const { id } = await params;
  const animal = getAnimalById(id);

  if (!animal) {
    notFound();
  }



  return (
    <section className="bg-linear-to-r from-[#a32a91] to-[#6600FF]">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/animals"
            className="inline-flex items-center gap-2 text-2xl text-black font-medium mb-6 transition-colors group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Animals
          </Link>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl group">
              <div className="absolute inset-0">
                <Image
                  src={animal.image}
                  alt={animal.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-500 hover:scale-105 lg:hover:scale-102"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-10" />

              <span className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white/90 text-xs rounded-full flex items-center gap-1">
                  <FaSearch />
                </span>
              </span>

              <span className="absolute top-4 right-4 px-4 py-2 bg-emerald-500/90 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg z-20 border border-white/20">
                {animal.category}
              </span>

              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg">
                  {formatPrice(animal.price)}
                </p>
                <p className="text-white/80 text-sm hidden sm:block">
                  Total Price
                </p>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {animal.name}
                  </h1>
                  <p className="text-gray-600 text-lg">
                    {animal.breed} {animal.type}
                  </p>
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors shadow-md hover:shadow-lg">
                    <FaPhone /> Contact Seller
                  </button>
                  <button className="p-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors">
                    <FaHeartbeat className="text-xl" />
                  </button>
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  About this Animal
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {animal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-emerald-200 pb-2">
                    Basic Information
                  </h3>

                  <InfoRow
                    icon={<FaWeight />}
                    label="Weight"
                    value={`${animal.weight} kg`}
                  />
                  <InfoRow
                    icon={<FaCalendar />}
                    label="Age"
                    value={`${animal.age} ${animal.age === 1 ? "year" : "years"}`}
                  />
                  <InfoRow
                    icon={<FaMapPin />}
                    label="Location"
                    value={animal.location}
                  />
                  <InfoRow icon={<FaLeaf />} label="Type" value={animal.type} />
                </div>

                <div className="space-y-5">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-emerald-200 pb-2">
                    Care & Health
                  </h3>

                  <InfoRow
                    icon={<FaLeaf />}
                    label="Feeding"
                    value={animal.details?.feeding || "Natural feed"}
                  />
                  <InfoRow
                    icon={<FaHeartbeat />}
                    label="Health Status"
                    value={animal.details?.healthStatus || "Healthy"}
                  />
                </div>
              </div>

              {animal.details?.sellerInfo && (
                <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 mb-10">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaMapPin className="text-emerald-600" /> Seller Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Farm Name</p>
                      <p className="font-medium text-gray-900">
                        {animal.details.sellerInfo.farmName}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <a
                        href={`tel:${animal.details.sellerInfo.contact}`}
                        className="font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        {animal.details.sellerInfo.contact}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <a
                  href={`tel:${animal.details?.sellerInfo?.contact || ""}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <FaPhone /> Call to Order
                </a>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-white hover:bg-gray-50 text-emerald-700 font-semibold rounded-xl border-2 border-emerald-200 transition-all">
                  <FaWhatsapp /> Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="group bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all cursor-default"
                role="status"
              >
                <div className="mb-2 transform group-hover:scale-110 transition-transform duration-200">
                  {badge.icon}
                </div>

                <span className="block text-sm font-semibold text-gray-800 mb-0.5">
                  {badge.text}
                </span>

                <span className="block text-xs text-gray-500">
                  {badge.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};



export default AnimalsDetailspage;
