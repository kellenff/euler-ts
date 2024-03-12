import eslintPlugin from "@typescript-eslint/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier/recommended";

export default [
  {
    files: ["src/**/*.ts"],
    plugins: {eslintPlugin},
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: "eslintPlugin/parser",
    },
  },
  pluginPrettier,
];
