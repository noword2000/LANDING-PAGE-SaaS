import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        globals.browser, // Garde les globales du navigateur (window, document)
        globals.jquery, // Reconnaît "$" et "jQuery"
      },
    },
    rules: {
      eqeqeq: "error", //Force l'usage de l'égalité triple === au lieu de la double ==.
      "no-var": "error", //Interdit totalement l'utilisation du mot-clé var. Tu dois utiliser let ou const.
      "prefer-arrow-callback": "error", //Oblige l'utilisation des fonctions fléchées () => { ... } pour les fonctions de rappel (callbacks).
      quotes: ["error", "double"], //Force l'utilisation des doubles guillemets (" ") pour toutes tes chaînes de caractères.
      semi: ["error", "always"], //Force la présence du point-virgule
    },
  },
]);
