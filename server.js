
import express from "express"
import cors from "cors"
import connect from "./connect.js"
import data from "./model.js"

const app = express();
app.use(cors());
connect();

app.post();

