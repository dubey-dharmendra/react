import { sum } from "../sum";

test("sum test fun", () => {
 expect(sum(2, 4)).toBe(6);
 expect(sum(-2, 4)).toBe(2);
 expect(sum(3, 3)).toBe(6);
})