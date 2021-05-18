// Test away!
const Car = require('./car.js');
test('works', () => {
  expect(3).toBe(3);
  expect(3).not.toBe(4);
  expect(3).toBeGreaterThan(2);
});

it("toEqual vs toBe", () => {
  let a = {}
  let b = {}
  let c = a

  expect(a).not.toBe(b)
  expect(a).toEqual(b)
  expect(a).toBe(c)
})

describe("car class", () => {
  let odyssey
  beforeEach(() => {
    odyssey = new Car("honda", "odyssey");
  })
  it("exists", () => {
    expect(Car).toBeDefined();
  })

  it("create car instances", () => {
    expect(odyssey).toBeInstanceOf(Car);
  })

  it("cars have a make property", () => {
    expect(odyssey).toHaveProperty("make");
    // expect(odyssey).toEqual({make: "honda"}) --> this breaks when we add a model constructor
  })

  it("cars have a model property", () => {
    expect(odyssey).toHaveProperty("model");
  })

  it("has odometer prop starts at 0", () => {
    expect(odyssey).toHaveProperty("odometer", 0);
  })

  it("cars have a drive method", () => {
    expect(odyssey.drive).toBeInstanceOf(Function);
  })

  it("drive method returns drive distance", () => {
    // arrent, act, assert
    const expected = 10;
    const actual = odyssey.drive(10);
    expect(actual).toBe(expected);
  })
  // it.only  runs only one test
  it("drive method increases odometer by given distance", () => {
    // expect(odyssey.odometer).toBe(0); - already tested
    odyssey.drive(10)
    expect(odyssey.odometer).toBe(10)
    odyssey.drive(10)
    expect(odyssey.odometer).toBe(20)
  })

  it("driveAsync method resolves into driver distance", async () => {
    const distance = await odyssey.driveAsync(10)
    expect(distance).toBe(10)

    odyssey.driveAsync(10).then(distance => {
      expect(distance).toBe(10)
    })
  })
})
