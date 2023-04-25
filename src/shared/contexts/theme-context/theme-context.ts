import { createContext } from "react";
import type { IThemeProperties } from "./@types/IThemeProperties";

export const ThemeContext = createContext({} as IThemeProperties);
