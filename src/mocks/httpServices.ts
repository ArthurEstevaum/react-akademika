import {http, HttpResponse} from "msw";

export const handlers = [
    http.post(`${process.env.API_BASE_URL}/disciplinas/criar`, () => {
        return HttpResponse.json({ success: true, message: "subject created with success" })
    })
]