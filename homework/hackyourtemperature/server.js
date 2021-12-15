import express from "express";
import http from "http";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello from backend to frontend!");
});

app.listen(port, () => {
  console.log(`Your app is listening to port ${port}`);
});
app.use(express.json());
app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.send(cityName);
});
