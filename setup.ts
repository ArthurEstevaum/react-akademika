import { cleanup } from '@testing-library/react';
import { server } from './src/mocks/mockServiceSetup'
import {afterAll, afterEach, beforeAll} from "vitest";

beforeAll(() => {
    server.listen()
})

afterEach(() => {
    server.resetHandlers()
    cleanup();
})

afterAll(() => {
    server.close()
})