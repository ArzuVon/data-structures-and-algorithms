// TyepScript is a superset of JavaScript
// File extension is TS
// You get additional features
// Type Safety!

// Three parts of a variable:
//    Name! Type! Value!

let foo: string | undefined;
foo = "5";

console.log(5 + "5"); // "55"

document.body.addEventListener("load", (e) => {
  console.log("Body loaded at " + e.timeStamp);
});

let str: string;
let num: number;
let bool: boolean;
let und: undefined | null;

let nums: number[];

interface Person {
  name: string;
  hired: Date;
}

interface Company {
  name: string;
  employees: Person[];
}

const codeFellows: Company = {
  name: "Code Fellows",
  employees: [
    { name: "Brook Riggio", hired: new Date(2011) },
    { name: "David Souther", hired: new Date(2022) },
  ],
};

function companyOverview(company: Company): string {
  return `${company.name} has ${company.employees.length} employees`;
}

interface Pair<T> {
  first: T;
  second: T;
}
