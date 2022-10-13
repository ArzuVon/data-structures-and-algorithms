const balancedBrackets = require("./brackets");

describe("Balanced Brackets", () => {
  it.each([
    "{}",
    "{}(){}",
    "()[[Extra Characters]]",
    "(){}[[]]",
    "{}{Code}[Fellows]",
  ])("%s is balanced", (str) => {
    expect(balancedBrackets(str)).toBe(true);
  });

  it.each(["{}", "()", "()", "()()()", "()", "()"])(
    "%s i balanced",
    (str) => {
      expect(balancedBrackets(str)).toBe(true);
    }
  );
  it.each(["{", ")", "[}", "[({}]", "(](", "{(})"])(
    "%s is not balanced",
    (str) => {
      expect(balancedBrackets(str)).toBe(false);
    }
  );
  it.each(["{", "{", "{", "}", "}", "}"])(
    "%s is not balanced",
    (str) => {
      expect(balancedBrackets(str)).toBe(false);
    }
  );
  it.each(["1", "2", "3", "4", "5", "6"])(
    "%s is not balanced",
    (str) => {
      expect(balancedBrackets(str)).toBe(false);
    }
  );
});
