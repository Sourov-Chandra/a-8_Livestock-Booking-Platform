import FeaturedAnimals from "@/component/home/FeaturedAnimals";
import HeroSection from "@/component/home/HeroSection";
import SacrificeTips from "@/component/home/SacrificeTips";
import TopBreeds from "@/component/home/TopBreeds";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedAnimals />
      <SacrificeTips />
      <TopBreeds />
    </div>
  );
}
