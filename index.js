import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import { ConnectDB } from "./src/utils/dbConnect.js";
import { AuthRoute } from "./src/rotues/Auth.rotue.js";
import { EnrichRoute } from "./src/rotues/Enrich.route.js";
import { searchRoute } from "./src/rotues/Search.route.js";

configDotenv();
const app = express();

app.use(cookieParser());
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(AuthRoute);

app.use(EnrichRoute)

app.use(searchRoute)

app.listen(process.env.PORT, () => {
    console.log("Server is running on port 3000");
    ConnectDB()
})
