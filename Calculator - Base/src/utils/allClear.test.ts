import { allClear } from "../utils/allClear";

describe("allClear", () => {
  test("resets the calculator state", () => {
    expect(allClear()).toEqual({ display: "0", operation: null });
  });
});
