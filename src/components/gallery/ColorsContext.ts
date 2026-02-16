import { type Context, createContext } from "react";
import type { LogoColors } from "../Logo";

interface ColorsActions {
    readonly colorsList: LogoColors[];
    addColors: (colors: LogoColors) => void;
    deleteColorsAtIndex: (index: number) => void;
}

const defaultColorActions: ColorsActions = {
    colorsList: [],
    addColors: (_: LogoColors) => { },
    deleteColorsAtIndex: (_: number) => { }
};

export const ColorsContext: Context<ColorsActions> =
    createContext<ColorsActions>(defaultColorActions);
