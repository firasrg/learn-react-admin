import "@fontsource/inter";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppEnvironment } from "./models/AppEnvironment";

async function enableMockingAsync() {
    if (process.env.NODE_ENV !== AppEnvironment.DEV) {
        return;
    }

    const workerSetup = await import("./mocks/index");

    return workerSetup.default.start();
}

enableMockingAsync().then(() => {
    ReactDOM.createRoot(document.getElementById("root")!).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
});
