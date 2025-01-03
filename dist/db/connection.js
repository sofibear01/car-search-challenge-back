"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
//Archivo de conección con la base de datos
const postgres_1 = __importDefault(require("postgres"));
const connectionString = process.env.DATABASE_URL;
//console.log(connectionString);  
exports.client = (0, postgres_1.default)(connectionString);
