export interface Collection<T> {
    insert(t: T): void;
    includes(t: T): boolean;
    toString(): string;
    // append(t: T): void;
    // insertBefore(value: T, newValue: T): void;
    // insertAfter(value: T, newValue: T): void; 
    // kthFromEnd(k: number): any;
    // set up for challenge 06 and 07
  }
  
  export function display(t: any): string {
    if (t?.toString) {
      return t.toString();
    }
    return `${t}`;
  }
  