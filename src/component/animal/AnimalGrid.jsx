import "animate.css";
import AnimalCard from "./AnimalCard";

export default function AnimalGrid({ animals }) {
  if (!animals || animals.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-400 font-mono text-sm">No animals found.</p>
      </div>
    );
  }

  return (
    <section >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {animals.map((animal, i) => (
          <div
            key={animal.id}
            className="animate__animated animate__fadeInUp"
            style={{
              animationFillMode: "both",
              animationDelay: `${i * 0.08}s`,
            }}
          >
            <AnimalCard animal={animal} />
          </div>
        ))}
      </div>
    </section>
  );
}
