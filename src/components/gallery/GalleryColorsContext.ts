import { type Context, createContext } from "react";
import type { LogoColors } from "../Logo";

interface GalleryColors {
    readonly colorsList: LogoColors[];
    addColors: (colors: LogoColors) => void;
    deleteColorsAtIndex: (index: number) => void;
}

const defaultGalleryColors: GalleryColors = {
    colorsList: [],
    addColors: (_: LogoColors) => { },
    deleteColorsAtIndex: (_: number) => { }
};

export const GalleryColorsContext: Context<GalleryColors> =
    createContext<GalleryColors>(defaultGalleryColors);
