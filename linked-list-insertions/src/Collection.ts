import { LinkedList } from "./LinkedList"

export interface Collection<T> {
  insert(t: T): void;
  includes(t: T): boolean;
  toString(): string;
  append(t:T): void;
  insertBefore(t:T, value: T): void;
  insertAfter(t: T, value: T): void;
  kthFromEnd(t:number): any;
  zip(ll1: LinkedList<T>, ll2: LinkedList<T>): LinkedList<T>;

}

export function display(t: any): string {
  if (t?.toString) {
    return t.toString();
  }
  return `${t}`;
}
