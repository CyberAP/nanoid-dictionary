import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import del from 'rollup-plugin-delete';
import pkg from './package.json';

export default [
  {
    input: 'src/nanoid-dictionary.js',
    output: {
      name: 'nanoid-dictionary',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      del({ targets: 'dist/*' }),
      resolve(),
      commonjs(),
      terser()
    ]
  },
  {
    input: 'src/nanoid-dictionary.js',
    output: [
      {
        file: pkg.main, format: 'cjs',
        plugins: [terser()],
      },
      { file: pkg.module, format: 'es' }
    ]
  }
];