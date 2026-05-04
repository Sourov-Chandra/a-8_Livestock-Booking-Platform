import animals from "../data/animals.json";

export function getAnimals() {
  return animals;
}

export function getFeaturedAnimals(count = 4) {
  return animals.slice(0, count);
}

export function getAnimalById(id) {
  const parsedId = Number(id);

  return animals.find((animal) => animal.id === parsedId);
}

export const formatPrice = (price) => {
    return new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency: "BDT",
      maximumFractionDigits: 0,
    }).format(price);
  };