import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("LinkedList", () => {
  it("checks if an item is included", () => {
    const list: Collection<string> = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pippin");

    expect(list.includes("Sam")).toBe(true);
    expect(list.includes("Bilbo")).toBe(false);
  });

  class Hobbit {
    constructor(public name: string) {}
    toString() {
      // YM - Young Master
      return `YM ${this.name}`;
    }
  }

  it("creates a string for objects", () => {
    const list: Collection<Hobbit> = new LinkedList<Hobbit>();

    list.insert(new Hobbit("Pippin"));
    list.insert(new Hobbit("Merry"));
    list.insert(new Hobbit("Sam"));
    list.insert(new Hobbit("Frodo"));

    const str = list.toString();
    expect(str).toEqual(
      "{ YM Frodo } -> { YM Sam } -> { YM Merry } -> { YM Pippin } -> NULL"
    );
  });
});
