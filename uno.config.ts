/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-escape */
import { defineConfig } from "unocss";
import { presetUno } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  shortcuts: {
    "flex-center": "flex justify-center items-center",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center",
    "abs-center": "absolute top-50% left-50% -translate-x-50% -translate-y-50%",
  },
  rules: [
    ["transition-primary", { transition: "0.32s ease-in-out" }],
    [/^scale-([\.\d]+)$/, ([_, num]) => ({ transform: `scale(${num})` })],
  ],
  presets: [presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
