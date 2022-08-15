import { Stack } from "./stack";

describe("Stack", () => {
  it("can push", () => {
    const stack = new Stack<string>();

    expect(() => stack.push("Frodo")).not.toThrow();
  });

  it("pushes", () => {
    const stack = new Stack<string>();

    stack.push("Frodo");
    stack.push("Sam");

    expect(stack.size).toBe(2);
    expect(stack.peek).toBe("Sam");
  });

  it("push multiple values into a stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.peek).toBe(3);
  });

  it("pops off the stack", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.peek).toBe(3);
    expect(stack.pop()).toBe(3);
  });

 
  it("can successfully empty a stack after multiple pops", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.peek).toBe(3);
    expect(stack.pop());
    expect(stack.pop());
    expect(stack.size).toBe(0);
  });

  it("can successfully empty a stack after multiple pops", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
    expect(stack.peek).toBe(3);
    expect(stack.pop());
    expect(stack.pop());
    expect(stack.size).toBe(0);
  });


  it("can successfully instantiate a empty stack", () => {
    const stack = new Stack<number>();

    expect(stack.size).toBe(0);
    expect(stack).toBeDefined();
  });

  it("raises exception when stack is empty", () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.pop();
    expect(stack.size).toBe(0);
    expect(() => {stack.pop()}).toThrow();
  });
});