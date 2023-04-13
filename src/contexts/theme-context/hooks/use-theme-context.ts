import { useContext } from "react";
import { ThemeContext } from "../theme-context";

export const useThemeContext = () => useContext(ThemeContext);
