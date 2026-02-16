import { type Context, createContext } from "react";
import type { LogoColors } from "../Logo";

interface GalleryColorsActions {
    readonly colorsList: LogoColors[];
    addColors: (colors: LogoColors) => void;
    deleteColorsAtIndex: (index: number) => void;
}

const defaultColorActions: GalleryColorsActions = {
    colorsList: [],
    addColors: (_: LogoColors) => { },
    deleteColorsAtIndex: (_: number) => { }
};

export const GalleryColorsContext: Context<GalleryColorsActions> =
    createContext<GalleryColorsActions>(defaultColorActions);
