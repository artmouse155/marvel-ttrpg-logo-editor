import { useMemo, useState } from "react";
import { DEFAULT_COLORS } from "../Logo";
import { EditorColorsContext } from "./EditorColorsContext";

interface Props {
    children: React.ReactNode;
}

export const EditorColorsProvider: React.FC<Props> = ({ children }) => {
    const [colors, setColors] = useState(DEFAULT_COLORS);
    const colorsActions = useMemo(() => ({ colors, setColors }), [colors]);

    return (
        <EditorColorsContext.Provider value={colorsActions}>
            {children}
        </EditorColorsContext.Provider>
    );
};
