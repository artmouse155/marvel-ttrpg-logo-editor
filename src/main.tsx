import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GalleryColorsProvider } from "./components/gallery/GalleryColorsProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <GalleryColorsProvider>
            <App />
        </GalleryColorsProvider>
    </StrictMode>,
);
