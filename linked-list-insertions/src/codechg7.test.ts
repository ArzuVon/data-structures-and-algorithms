import { LinkedList } from "./LinkedList";

describe("Linked List", () => {
  it("happy path", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pablo");
    list.insert("Saul");

    const str = list.kthFromEnd(2);
    expect(str).toEqual("Merry");
  });

  it("k is equal to the length of the linked list", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pablo");
    list.insert("Saul");

    expect(() => list.kthFromEnd(5)).toThrow();
  });

  it("when k is negative", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pablo");
    list.insert("Saul");

    expect(() => list.kthFromEnd(-2)).toThrow("k must be positive");
  });

  it("when linked list length is 1", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    expect(() => list.kthFromEnd(0)).toThrow();
  });

  it("Where k is greater than the length of the linked list", () => {
    const list = new LinkedList<string>();

    list.insert("Frodo");
    list.insert("Sam");
    list.insert("Merry");
    list.insert("Pablo");
    list.insert("Saul");

    expect(() => list.kthFromEnd(7)).toThrowError("list too long");
  });
});