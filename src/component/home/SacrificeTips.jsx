import { Card, Chip } from "@heroui/react";
import ScrollAnimate from "@/component/home/ScrollAnimate"; 

const tips = [
  {
    number: "01",
    category: "Health Check",
    title: "Inspect Before You Buy",
    description:
      "Always examine the animal carefully before purchase. Ensure it is free from visible injuries, skin diseases, or abnormalities. Healthy eyes, clean nose, and active behavior are good signs.",
    color: "success",
  },
  {
    number: "02",
    category: "Age & Weight",
    title: "Verify Age & Minimum Weight",
    description:
      "Cattle should be at least 2 years old, goats and sheep at least 1 year old. Confirm the animal meets the minimum weight standards required for a valid sacrifice.",
    color: "primary",
  },
  {
    number: "03",
    category: "Transportation",
    title: "Handle with Care",
    description:
      "Transport animals in a spacious, ventilated vehicle. Avoid overcrowding and rough handling. Stressed animals are more prone to injury and illness — keep the journey calm and short.",
    color: "warning",
  },
  {
    number: "04",
    category: "Pre-Sacrifice Care",
    title: "Feed & Rest the Animal",
    description:
      "Give the animal proper feed and water for at least 24 hours before the day. Allow it to rest in a clean, shaded space. A well-rested animal is calmer and healthier.",
    color: "accent",
  },
  {
    number: "05",
    category: "Documentation",
    title: "Keep Records",
    description:
      "Hold onto receipts, health certificates, and any seller documentation. This protects you in case of disputes and ensures traceability of the animal you purchased.",
    color: "danger",
  },
  {
    number: "06",
    category: "Hygiene",
    title: "Maintain Clean Surroundings",
    description:
      "Keep the area where the animal is kept clean and dry. Dispose of waste properly. Good hygiene prevents disease spread to other animals and your household.",
    color: "success",
  },
];

const chipColorMap = {
  success: "success",
  primary: "primary",
  warning: "warning",
  accent: "accent",
  danger: "danger",
};

const SacrificeTips = () => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-linear-to-br from-[#ae5b18] to-[#2a4bc2]">
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.15,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
       
        <ScrollAnimate
          animation="fadeInDown"
          delay="0s"
          className="text-center mb-12"
        >
          <div className="w-full text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-md">
              Smart Tips for Buyers
            </h2>
            <p className="text-white/85 max-w-xl mx-auto text-base leading-relaxed">
              Make the most of your purchase with these essential guidelines for
              selecting, transporting, and caring for your animal.
            </p>
          </div>
        </ScrollAnimate>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <ScrollAnimate key={tip.number} delay={`${i * 0.1}s`}>
              <Card
                radius="lg"
                className="group bg-white/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#ae5b18] to-[#2a4bc2] group-hover:h-1.5 transition-all duration-300" />

                <div className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-gray-400 select-none leading-none group-hover:text-[#2a4bc2]/40 transition-colors">
                      {tip.number}
                    </span>
                    <Chip
                      color={chipColorMap[tip.color]}
                      variant="flat"
                      size="sm"
                      className="text-xs font-medium"
                    >
                      {tip.category}
                    </Chip>
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 leading-snug">
                    {tip.title}
                  </h3>

                  <div className="w-8 h-0.5 bg-gray-200 rounded-full group-hover:w-16 group-hover:bg-linear-to-r group-hover:from-[#ae5b18] group-hover:to-[#2a4bc2] transition-all duration-300" />

                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {tip.description}
                  </p>
                </div>
              </Card>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SacrificeTips;
