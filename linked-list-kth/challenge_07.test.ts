import { LinkedList } from "./LinkedList";

describe("linked list", () => {
  describe("kth from end", () => {
    it("can query kth element", () => {
      const ll = new LinkedList<number>();
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(ll.kthFromEnd(0)).toBe(2);
      expect(ll.kthFromEnd(2)).toBe(3);
    });

    it("throws an exception when longer than list", () => {
      const ll = new LinkedList<number>();
      ll.append(1);
      ll.append(3);
      ll.append(8);
      ll.append(2);

      expect(() => {
        ll.kthFromEnd(0);
      }).toThrow();
    });
  });
});
