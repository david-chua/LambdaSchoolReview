// Test away!
test('works in car test', () => {
  expect(3).toBe(3);
  expect(3).not.toBe(4);
  expect(3).toBeGreaterThan(2);
});

it("toEqual vs toBe in cartest", () => {
  let a = {}
  let b = {}
  let c = a

  expect(a).not.toBe(b)
  expect(a).toEqual(b)
  expect(a).toBe(c)
})
