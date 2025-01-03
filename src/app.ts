import express from "express";
import cors from "cors";
import routers from "./routes/index";
import bodyParser from 'body-parser';
import serverless from "serverless-http";
import { config } from "dotenv";

config();   

// Create Express server
export const app = express();
const port = process.env.PORT || 3000;

// Middlewares para recibir solicitudes desde cualquier lado
// app.use(
//     cors({
//         origin: "*",
//     }),
// );

app.use(
    cors({
        origin: "*", // Define explícitamente el origen permitido
        credentials: true, // Habilita el envío de cookies o credenciales
        methods: ["GET", "POST", "PUT", "DELETE"], // Define los métodos permitidos
        allowedHeaders: ["Content-Type", "Authorization"], // Define los headers permitidos
    })
);

// Express 4.0
app.use(express.json());

// Rutas: todas arrancan con /api
app.use("/api", routers);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export const handler = serverless(app);
