import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { GalleryColorsProvider } from "./components/gallery/GalleryColorsProvider.tsx";
import { EditorColorsProvider } from "./components/editor/EditorColorsProvider.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <EditorColorsProvider>
            <GalleryColorsProvider>
                <App />
            </GalleryColorsProvider>
        </EditorColorsProvider>
    </StrictMode>,
);
