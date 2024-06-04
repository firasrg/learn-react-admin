import { http, HttpResponse } from "msw";
import { setupWorker } from "msw/browser";

const baseUrl = import.meta.env.VITE_JSON_SERVER_URL;

const handlers = [
    http.get(`${baseUrl}/users`, () => {
        return HttpResponse.json(
            [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Jane Doe" },
            ],
            {
                headers: {
                    "content-range": "0-2/1",
                },
            },
        );
    }),
];

export default setupWorker(...handlers);
