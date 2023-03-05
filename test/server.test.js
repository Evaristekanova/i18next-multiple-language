const request = require('supertest')
const app = require('../server')

describe("GET /", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /", () => { 
  it("should return 404", async () => { 
    const res = await request(app).get("/notfound");
    expect(res.statusCode).toBe(404);
  })
})