import { Collection } from "./Collection";
import { LinkedList } from "./LinkedList";

describe("linked list", () => {

  it("runs the custom test i created", () => {
     const list: Collection<string> = new LinkedList<string>();
     expect(list).toBeDefined();
  });
 
  it("can insert into linked list", () => {
     const list: Collection<string> = new LinkedList<string>();
     list.insert("Test");
     list.insert("Test two");
     expect(list.includes("Test")).toBe(true); 
     expect(list.includes("Test two")).toBe(true);
  });
 
  it("head points to 1st node", () => {
     class Node {
       constructor(public item: string) { }
       toString() {
         return `${this.item}`
       }
 
     }
 
     const list: Collection<Node> = new LinkedList<Node>();
     list.insert(new Node("Test two"));
     list.insert(new Node("Test Start"));

     console.log(list.toString());
     expect(list.toString()).toBe("{ Test Start } -> { Test two } -> NULL");
  });
 
  it("returns false when can't find value", () => {
     const list: Collection<string> = new LinkedList<string>();
     list.insert("Test two");
     list.insert("Test Start");

     console.log(list.toString);
     expect(list.includes("Test")).toBe(false);
  });
 
  it("inserts after", () => {
     const list = new LinkedList<string>();
     list.insert("Test two");
     list.insert("Test Start"); 
     list.insertAfter("Test two", "Inserted Test");
 
     console.log(list.toString());
     expect(list.toString()).toBe("{ Test Start } -> { Test two } -> { Inserted Test } -> NULL");
  });
 
  it("inserts before", () => {
     const list = new LinkedList<string>();
     list.insert("Test 3");
     list.insert("Test two");
     list.insert("Test Start");
     list.insertBefore("Test 3", "Inserted Test");
 
     console.log(list.toString());
     expect(list.toString()).toBe("{ Test Start } -> { Test two } -> { Inserted Test } -> { Test 3 } -> NULL");
 
  });
 
  it("appends", () => {
 
     const list = new LinkedList<string>();
     list.insert("Test 3");
     list.insert("Test two");
     list.insert("Test Start");
     list.append("Inserted Test");
 
     console.log(list.toString());
     expect(list.toString()).toBe("{ Test Start } -> { Test two } -> { Test 3 } -> { Inserted Test }  -> NULL");
   });
  });