import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import resolve from "@rollup/plugin-node-resolve";
import scssSmartAsset from 'rollup-plugin-scss-smart-asset';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    input: pkg.source,
    output: [
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'esm' }
    ],
    plugins: [
        peerDepsExternal(),
        scssSmartAsset({
            insert: true,
            postcssUrlConfig: {
                url: 'inline'
            }
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
