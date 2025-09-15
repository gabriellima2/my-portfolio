import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
    ],
    ignorePatterns: ["*.js"],
    rules: {
      "linebreak-style": ["error", "unix"],
      quotes: [2, "single"],
      semi: [2, "never"],
      indent: "off",
      "prettier/prettier": "error",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }),
];

export default eslintConfig;
