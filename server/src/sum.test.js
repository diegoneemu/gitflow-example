import sum from "./sum";

test("[SUM] 2 + 2", () => {
  const a = (b = 2);

  expect(sum(a, b)).toBe(4);
});
