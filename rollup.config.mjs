import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import fse from 'fs-extra';
import cleanup from 'rollup-plugin-cleanup';

const createComment = data => {
    return [
        '/*!',
        ...data.map(v => {
            return ['*', v].join(' ');
        }),
        '*/'
    ].join('\n');
};

const getBanner = () => {
    const { name, version, author, license } = fse.readJsonSync('./package.json');
    const data = [`${name} v${version}`, `(c) 2019-${new Date().getFullYear()} ${author}`, `Released under the ${license} License.`];
    return createComment(data);
};

const plugins = [
    cleanup({
        maxEmptyLines: 1
    })
];

export default [
    {
        input: 'lib/index.js',
        output: {
            format: 'cjs',
            file: 'dist/index.js',
            banner: getBanner(),
            generatedCode: {
                constBindings: true
            }
        },
        plugins
    },
    {
        input: 'lib/index.js',
        output: {
            format: 'esm',
            file: 'dist/index.esm.js',
            banner: getBanner(),
            generatedCode: {
                constBindings: true
            }
        },
        plugins
    },
    {
        input: 'lib/index.js',
        output: {
            format: 'umd',
            name: 'tools',
            file: 'dist/index.umd.js',
            banner: getBanner(),
            generatedCode: {
                constBindings: true
            },
            globals: {
                lodash: '_'
            }
        },
        external: ['lodash'],
        plugins: [...plugins, nodeResolve(), commonjs(), terser()]
    }
];
