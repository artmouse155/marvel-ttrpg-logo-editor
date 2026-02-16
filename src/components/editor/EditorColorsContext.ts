import { type Context, createContext } from "react";
import { DEFAULT_COLORS, type LogoColors } from "../Logo";

interface EditorColors {
    readonly colors: LogoColors;
    setColors: (colors: LogoColors) => void;
}

const defaultEditorColors: EditorColors = {
    colors: DEFAULT_COLORS,
    setColors: (_: LogoColors) => { },
};

export const EditorColorsContext: Context<EditorColors> =
    createContext<EditorColors>(defaultEditorColors);
