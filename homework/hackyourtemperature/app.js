import express from "express";
import fetch from "node-fetch";
import { keys } from "./sources/key.js";
const app = express();

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.post("/weather", express.json(), async (req, res) => {
  const cityName = req.body.cityName;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${keys.API_KEY}&units=metric`
  );
  if (!response.ok) {
    res.status(404);
    res.send({ weatherText: "City is not found!" });
    return;
  }
  const data = await response.json();
  res.send({
    weatherText: `Today in ${cityName},the temperature is ${Math.round(
      data.main.temp
    )} °C.`,
  });
});

export default app;
