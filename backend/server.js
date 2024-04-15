const express = require("express");
const cors = require("cors");
const shoutoutRoutes = require("./src/shoutoutsapp/routes");

const app = express();
const port = 5050;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/shoutoutsapp", shoutoutRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
