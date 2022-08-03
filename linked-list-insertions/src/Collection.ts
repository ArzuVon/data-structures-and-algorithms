export interface Collection<T> {
  insert(t: T): void;
  includes(t: T): boolean;
  toString(): string;
}

export function display(t: any): string {
  if (t?.toString) {
    return t.toString();
  }
  return `${t}`;
}
