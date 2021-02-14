import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from "rollup-plugin-postcss";
import postcssUrl from 'postcss-url';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            inject: true,
            plugins: [
                postcssUrl({ url: 'inline' })                
            ]            
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        del({ targets: ['dist/*'] }),
        resolve(),
        commonjs(),        
    ],
    external: Object.keys(pkg.peerDependencies || {}),
};
