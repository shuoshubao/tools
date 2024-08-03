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
            file: 'dist/index.js',
            format: 'cjs',
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
            file: 'dist/index.esm.js',
            format: 'esm',
            banner: getBanner(),
            generatedCode: {
                constBindings: true
            }
        },
        plugins
    }
];
