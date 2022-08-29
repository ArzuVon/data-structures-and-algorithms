import { SetOfStacks } from "./set_of_stacks.ts";

describe("Stack", () => {
  it("can push", () => {
    const s = new Stack<string>();

    expect(() => s.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const s = new Stack<string>();

    s.push("Frodo");
    s.push("Sam");

    expect(s.size).toBe(2);
    expect(s.peek).toBe("Sam");
  });
  it("pops", () =>{
    const s = new Stack<String>();

    s.push("Frodo");
    s.push("Sam");
    s.push("Merry");
    s.pop();
    s.pop();
    expect(s.size).toBe(1);
  });
  it(" instantiate an empty stack", () =>{
    const s = new Stack<String>();
    expect(s).toBeTruthy();
  })
  it("Throws exception when pop on empty stack", ()=>{
    const s = new Stack<String>();
    expect(()=> {s.pop()}).toThrow();
  });
  it("Throws exception when peek on empty stack", ()=>{
    const s = new Stack<String>();
    expect(()=> {s.peek}).toThrow();
  });
});