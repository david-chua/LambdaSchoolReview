const Hobbit = require('./hobbits-model.js');
const db = require('../../data/dbConfig.js');

const frodo = {name: "Frodo"}
const sam = {name: "Sam"}

beforeAll(async() => {
  await db.migrate.rollback()
  await db.migrate.latest();
})

beforeEach(async () =>{
  await db('hobbits').truncate();
})

afterAll(async () => {
  await db.destroy();
})

// tests cross-env to make sure it's setting DB_ENV to be "testing"
it("correct env", () => {
  expect(process.env.DB_ENV).toBe("testing");
})

describe("Hobbits model", () => {
  describe("insert function", () => {
    it('adds hobbit to db', async () => {
      let all;
      await Hobbit.insert(frodo);
      all = await db("hobbits");
      expect(all).toHaveLength(1);

      await Hobbit.insert(sam);
      all = await db("hobbits");
      expect(all).toHaveLength(2);
    })

    it("values of hobbits", async () => {
      const hobbit = await Hobbit.insert(frodo);
      expect(hobbit).toMatchObject({id: 1, ...frodo});
    })
  })

  describe("update function", () => {
    it("updates the hobbit", async () => {
        const [id] = await db("hobbits").insert(frodo)
        await Hobbit.update(id, {name: "FRODO"});
        const updated = await db("hobbits").where({id}).first();
        expect(updated.name).toBe("FRODO");
    })

    it("check the updated hobbit", async () => {
      const [id] = await db("hobbits").insert(frodo)
      await Hobbit.update(id, {name: "FRODO"});
      const updated = await db("hobbits").where({id}).first();
      expect(updated).toMatchObject({id: id, name: "FRODO"});
    })

  })


})
