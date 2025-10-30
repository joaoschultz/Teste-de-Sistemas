import { isDot } from "./isDot";

describe("isDot", () => {
    test("retorna verdadeiro para '.'", () => {
        expect(isDot(".")).toBe(true);
    });

    test("retorna falso para 'a'", () => {
        expect(isDot("a")).toBe(false);
    })
    test("retorna falso para '1'", () => {
        expect(isDot("1")).toBe(false);
    });
});