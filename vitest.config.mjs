/*
 * @Author: fangtao01
 * @Date: 2024-05-30 15:12:03
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-08-04 21:52:38
 * @Description: Vitest 配置
 * @Link: https://cn.vitest.dev
 */
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { mergeConfig } from 'vitest/config';

const isProduction = process.env.NODE_ENV === 'production';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default mergeConfig({
    test: {
        reporters: ['html'],
        outputFile: './docs/vitest/index.html',
        coverage: {
            enabled: true,
            reporter: ['html', 'istanbul-reporter-html'],
            reportsDirectory: isProduction ? './tools/docs/coverage' : './docs/coverage',
            include: ['**/lib/*.js']
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './lib')
        }
    }
});
