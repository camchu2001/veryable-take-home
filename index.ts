import express from "express";
import { router } from "./src";

const app = express();
app.use(express.json());
app.use("/api", router);

app.listen(4000, () => {
  console.log("Server is running on port 4000 successfully!");
});
