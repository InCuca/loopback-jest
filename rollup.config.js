// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import autoExternal from 'rollup-plugin-auto-external';
import fixMktmpdir from './.rollup/fix-mktmpdir';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/loopback-jest.js',
    format: 'cjs',
  },
  plugins: [
    fixMktmpdir,
    autoExternal(),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    babel({
      presets: [
        [
          'env',
          {
            modules: false,
          },
        ],
      ],
      plugins: ['external-helpers'],
      babelrc: false,
      exclude: 'node_modules/**', // only transpile our source code
    }),
  ],
};
