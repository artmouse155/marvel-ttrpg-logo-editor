import { useContext } from "react";
import { GalleryColorsContext } from "./GalleryColorsContext";

export const useGalleryColors = () => { return useContext(GalleryColorsContext); };