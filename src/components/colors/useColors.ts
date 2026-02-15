import { useContext } from "react";
import { ColorsContext } from "./ColorsContext";

export const useColors = () => { return useContext(ColorsContext); };