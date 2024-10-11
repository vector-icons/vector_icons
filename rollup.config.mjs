import typescript from "rollup-plugin-typescript2";
import globImport from "rollup-plugin-glob-import";
import { string } from "rollup-plugin-string";
import terser from "@rollup/plugin-terser";

const plugins = [
    globImport({format: "default"}),
    typescript({
        tsconfig: "tsconfig.json",
        useTsconfigDeclarationDir: true,
    }),
    string({include: "**/*.svg"}),
    terser(),
]

export default {
    plugins: plugins,
    input: "src/index.ts",
    output: [
        { file: "dist/index.esm.js", format: "esm", name: "QuarkIcons", sourcemap: true },
        { file: "dist/index.umd.js", format: "umd", name: "QuarkIcons", sourcemap: true },
    ],
}