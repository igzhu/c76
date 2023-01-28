//import { revertString } from "../../utils/revertAndCalcStr.js";
import { revertString, calcStrLenght } from "../../utils/revertAndCalcStr.js";

xdescribe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
  it("check func result is array", () => expect(calcStrLenght("one two")).toHaveLength(2));
});
 
xdescribe("tests for calcStrLenght function", () => {
  it("check func result is array", () => expect(calcStrLenght("one two")).toHaveLength(2));
});

describe("tests for both function", () => {
  it("reverse str/is array check", () => {expect(revertString("abc")).toBe("cba");
  expect(calcStrLenght("one two")).toHaveLength(2);
  });
});