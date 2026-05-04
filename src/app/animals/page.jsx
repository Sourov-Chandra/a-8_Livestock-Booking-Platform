import AnimalGrid from "@/component/animal/AnimalGrid";
import SortFilter from "@/component/animal/Sortfilter";
import { getAnimals } from "@/lib/data";
import "animate.css";

function getSortedFilteredAnimals(animals, { type, sort }) {
  let result = [...animals];

  if (type && type !== "All") {
    result = result.filter((a) => a.type === type);
  }

  if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
  if (sort === "weight_asc") result.sort((a, b) => a.weight - b.weight);
  if (sort === "weight_desc") result.sort((a, b) => b.weight - a.weight);

  return result;
}

const AllAnimalsPage = async ({ searchParams }) => {
  const animals = getAnimals();


  const { type = "All", sort = "" } = await searchParams;

  const filtered = getSortedFilteredAnimals(animals, { type, sort });

  return (
    <main className="bg-linear-to-r from-[#4b6cb7] to-[#182848]">
      <section
        className="relative overflow-hidden py-16 px-4"
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <div
            className="animate__animated animate__fadeInDown"
            style={{ animationFillMode: "both" }}
          >
            <p className="text-green-400 font-mono text-xs md:text-sm uppercase tracking-widest mb-3">
              — {filtered.length} Animals Available
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight">
              Find Your{" "}
              <em className="text-green-400 not-italic">Perfect Animal</em>
            </h1>
            <p className="text-white/50 text-sm mt-3 max-w-md">
              Healthy, vet-verified livestock from trusted farms across
              Bangladesh.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 min-h-screen">
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.12,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-6xl mx-auto">
          <SortFilter />

          <p className="text-xs text-gray-300 font-semibold mb-6">
            Showing{" "}
            <span className="text-green-200 font-bold">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "animal" : "animals"}
            {type !== "All" ? ` · ${type}` : ""}
          </p>

          <AnimalGrid animals={filtered} />
        </div>
      </section>
    </main>
  );
}
export default AllAnimalsPage