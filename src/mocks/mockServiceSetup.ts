import { setupServer } from 'msw/node'
import { handlers } from "./httpServices.ts";

export const server = setupServer(...handlers)