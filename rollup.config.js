import { createPlugins } from "rollup-plugin-atomic"

const plugins = createPlugins([["ts", { tsconfig: "./lib/tsconfig.json" }, true], "js", "json"])

const RollupConfig = [
  {
    input: "lib/main.ts",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
      },
    ],
    // loaded externally
    external: ["atom"],
    plugins,
  },
]
export default RollupConfig
