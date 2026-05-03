import animals from "../data/animals.json";

export function getAnimals() {
  return animals;
}

export function getFeaturedAnimals(count = 4) {
  return animals.slice(0, count);
}