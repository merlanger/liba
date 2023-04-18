import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";

/** @type {import("rollup").RollupOptions} */
export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    del({ targets: "dist" }),
    PeerDepsExternalPlugin(),
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
  ],
};
