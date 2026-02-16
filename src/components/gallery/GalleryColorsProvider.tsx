import { useEffect, useMemo, useState } from "react";
import type { LogoColors } from "../Logo";
import { ColorsContext } from "./ColorsContext";

const COLORS_LIST_KEY: string = "colorsList";

interface Props {
    children: React.ReactNode;
}

export const GalleryColorsProvider: React.FC<Props> = ({ children }) => {
    const saveToLocalStorage = (colors: LogoColors[]): void => {
        localStorage.setItem(COLORS_LIST_KEY, JSON.stringify(colors));
    };

    const retrieveFromLocalStorage = () => {
        const colorsString = localStorage.getItem(COLORS_LIST_KEY);
        if (colorsString) {
            return JSON.parse(colorsString) as LogoColors[];
        }
        return [];
    };

    // const clearLocalStorage = (): void => {
    //     localStorage.removeItem(COLORS_KEY);
    // };

    const [colorsList, setColorsList] = useState(retrieveFromLocalStorage());

    const addColors = (colors: LogoColors) => {
        setColorsList(prevColors => [colors, ...prevColors]);
    };

    const deleteColorsAtIndex = (index: number) => {
        setColorsList(prevColors => prevColors.toSpliced(index, 1));
    };

    const colorsActions = useMemo(
        () => ({ colorsList, addColors, deleteColorsAtIndex }),
        [colorsList],
    );

    useEffect(() => {
        saveToLocalStorage(colorsList);
        console.log(colorsList);
    }, [colorsList]);

    return (
        <ColorsContext.Provider value={colorsActions}>
            {children}
        </ColorsContext.Provider>
    );
};
