import express from "express";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api", routes);

export default app;
