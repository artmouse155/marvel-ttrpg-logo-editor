import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";

export const useGalleryColors = () => { return useContext(ColorsContext); };