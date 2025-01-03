"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const serverless_http_1 = __importDefault(require("serverless-http"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Create Express server
exports.app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// Middlewares para recibir solicitudes desde cualquier lado
// app.use(
//     cors({
//         origin: "*",
//     }),
// );
exports.app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // Define explícitamente el origen permitido
    credentials: true, // Habilita el envío de cookies o credenciales
    methods: ["GET", "POST", "PUT", "DELETE"], // Define los métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Define los headers permitidos
}));
// Express 4.0
exports.app.use(express_1.default.json());
// Rutas: todas arrancan con /api
exports.app.use("/api", index_1.default);
exports.app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
exports.handler = (0, serverless_http_1.default)(exports.app);
