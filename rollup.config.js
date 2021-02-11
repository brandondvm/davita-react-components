import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from "rollup-plugin-postcss";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        peerDepsExternal(),        
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        resolve(),
        commonjs(),
        postcss()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
