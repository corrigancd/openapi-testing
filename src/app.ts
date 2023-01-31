// src/app.ts
import * as Hapi from '@hapi/hapi';
// @ts-ignore
import { RegisterRoutes } from "../build/routes";

export const app = (port = 3000): Hapi.Server => {
  const server = Hapi.server({ host: 'localhost', port });
  RegisterRoutes(server);
  return server;
}
