import app from "../app.js";
//import { keys } from "../sources/key.js";
//import fetch from "node-fetch";
import supertest from "supertest";
import { TestWatcher } from "jest";

const request = supertest(app);

describe("POST /weather", () => {
  describe("Check if user entered a city name", () => {
    it("Should receive a 200 status code if city name is received", async () => {
      const response = await request.post("/weather").send({
        cityName: "paris",
      });
      expect(response.statusCode).toBe(200);
    });
    it("Should return 404 status if city name is gibberish", async () => {
      const response = await request.post("/weather").send({
        cityName: "ssxxooss",
      });
      expect(response.statusCode).toEqual(404);
    });
  });
});
