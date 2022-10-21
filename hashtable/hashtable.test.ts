import { HashTable } from "./hashtable";

export interface BirdLog {
  species: string;
  gender: "male" | "female";
}

const TEST_LOG: BirdLog[] = [
  { species: "Duck", gender: "male" },
  { species: "Duck", gender: "female" },
  { species: "Goose", gender: "female" },
  { species: "Tufted Titmouse", gender: "male" },
  { species: "Duck", gender: "female" },
  { species: "Duck", gender: "female" },
  { species: "Tufted Titmouse", gender: "female" },
  { species: "Goose", gender: "female" },
  { species: "Duck", gender: "male" },
  { species: "Goose", gender: "female" },
  { species: "Duck", gender: "male" },
  { species: "Tufted Titmouse", gender: "male" },
  { species: "Goose", gender: "female" },
];

test("HashTable", () => {
  const table = new HashTable<string, number>(2);

  for (const log of TEST_LOG) {
    if (table.has(log.species)) {
      table.set(log.species, table.get(log.species) + 1);
    } else {
      table.set(log.species, 1);
    }
  }
  table.keys();
  expect(table.get("Duck")).toBe(6);
  expect(table.get("Goose")).toBe(4);
  expect(table.get("Tufted Titmouse")).toBe(3);
  expect(() => table.get("Owl")).toThrowError();
});
