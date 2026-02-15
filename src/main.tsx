import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { ColorsProvider } from "./components/colors/ColorsProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ColorsProvider>
            <App />
        </ColorsProvider>
    </StrictMode>,
);
