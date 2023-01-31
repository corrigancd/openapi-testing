// src/server.ts
import { app } from "./app";

const port = Number(process.env.PORT) || 3000;

app(port).start();

console.log(`Example app listening at http://localhost:${port}`);
