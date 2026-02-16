import { useContext } from "react";
import { EditorColorsContext } from "./EditorColorsContext";

export const useEditorColors = () => { return useContext(EditorColorsContext); };