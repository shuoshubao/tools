# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.6.3 (2024-09-04)

### Features

- `convertDataToCascader` 删除空的 children

## 0.6.2 (2024-08-04)

### Features

- 单测框架由 `ava` 切换至 `vitepress`

## 0.6.1 (2024-08-02)

### Features

- `getImageSize` 去掉 `crossOrigin=anonymous`, 可自行配置额外属性

## 0.6.0 (2024-08-01)

### Features

- `getImageSize` 增加设置 `crossOrigin=anonymous`

### BREAKING CHANGE

- 移除 getAntdLocaleZhCN
- 移除 defineMomentLocaleZhCn
- 移除 changeImageUrlToBase64
- 移除 isAndroid
- 移除 isIOS
- 移除 isIPhone

## [0.4.1](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.4.0...@nbfe/tools@0.4.1) (2023-03-03)


### Features

- 新增 arrayMove; 数组交换位置 ([933b395](https://github.com/shuoshubao/nbfe/commit/933b395be4357dc0134e9a856a0aa92e4e1b8456))
- add homepage ([97f71b5](https://github.com/shuoshubao/nbfe/commit/97f71b59f9bb97d743d4db2f46dd9be9bad43978))

# [0.4.0](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.3.0...@nbfe/tools@0.4.0) (2023-01-02)

### Features

- lodash-es ([20d1683](https://github.com/shuoshubao/nbfe/commit/20d168300b413c885d9fb7942b51495f15af6c5e))

# [0.3.0](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.19...@nbfe/tools@0.3.0) (2022-12-25)

### Features

- module dist/index.esm.js ([594587a](https://github.com/shuoshubao/nbfe/commit/594587ae2f0d70a62d155b795b81d9ebf7d470f5))

## [0.2.19](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.18...@nbfe/tools@0.2.19) (2022-12-25)

### Bug Fixes

- 调整格式 ([42e276e](https://github.com/shuoshubao/nbfe/commit/42e276ee19c03ca23b3237318fb4d98ec72f8f8f))
- **rollup:** @rollup/plugin-terser ([e69d5af](https://github.com/shuoshubao/nbfe/commit/e69d5af681dc4dd975a002e19b2dd1bfc05a998d))
- **rollup:** umd globals ([29a5c08](https://github.com/shuoshubao/nbfe/commit/29a5c085caebf32de6e16e428809ef3534774f0c))

### Features

- **rollup:** esm ([1bffb22](https://github.com/shuoshubao/nbfe/commit/1bffb2249d47fb9b2d7e7dd2564a9a0eee342b45))

## [0.2.18](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.17...@nbfe/tools@0.2.18) (2022-11-28)

### Bug Fixes

- createElement 单标签且无 props 时多一个空格 ([77b0a93](https://github.com/shuoshubao/nbfe/commit/77b0a93acbdb13cf691ca94303d393a0cbc6f084))
- createElement style 处理 ([4f06ae0](https://github.com/shuoshubao/nbfe/commit/4f06ae031faafc16d56b0d418ac9626104dcf336))

### Features

- createElement props 可以传 null ([842cabe](https://github.com/shuoshubao/nbfe/commit/842cabea50cf95d87be9feb67ac5cbfd96dff701))

## [0.2.17](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.16...@nbfe/tools@0.2.17) (2022-11-26)

### Bug Fixes

- 修复 eslint 问题 ([9708d0b](https://github.com/shuoshubao/nbfe/commit/9708d0b1de01b847dda2434ef083faecf84158bb))
- 修改示例 ([a8f5999](https://github.com/shuoshubao/nbfe/commit/a8f59997707bb8c66635169a24184c33621458e4))
- require => import ([3a2d60a](https://github.com/shuoshubao/nbfe/commit/3a2d60a693ea9b067bb9fb9c7585bf7cb761e3f9))

## [0.2.16](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.15...@nbfe/tools@0.2.16) (2022-11-23)

### Features

- 新增方法 memoize ([95a299d](https://github.com/shuoshubao/nbfe/commit/95a299dcb112dc6203a672fe4e0fa05d0ef76e6c))

## [0.2.15](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.14...@nbfe/tools@0.2.15) (2022-06-06)

### Features

- 校验规则, 增加 uniq: 重复项校验 ([e64b4e5](https://github.com/shuoshubao/nbfe/commit/e64b4e5))

## [0.2.14](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.13...@nbfe/tools@0.2.14) (2022-02-15)

**Note:** Version bump only for package @nbfe/tools

## [0.2.13](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.12...@nbfe/tools@0.2.13) (2021-11-23)

**Note:** Version bump only for package @nbfe/tools

## [0.2.12](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.11...@nbfe/tools@0.2.12) (2021-11-17)

### Features

- 增加方法 getTooltipHtml; 转换简写的链接 ([3a5cdf6](https://github.com/shuoshubao/nbfe/commit/3a5cdf6))

## [0.2.11](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.10...@nbfe/tools@0.2.11) (2021-10-29)

### Bug Fixes

- image onerror ([b4a7f50](https://github.com/shuoshubao/nbfe/commit/b4a7f50))

## [0.2.10](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.9...@nbfe/tools@0.2.10) (2021-09-02)

### Features

- getAntdLocaleZhCN antd 中文语言包 ([15ab0f1](https://github.com/shuoshubao/nbfe/commit/15ab0f1))

## [0.2.9](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.8...@nbfe/tools@0.2.9) (2021-08-16)

**Note:** Version bump only for package @nbfe/tools

## [0.2.8](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.7...@nbfe/tools@0.2.8) (2021-08-11)

### Bug Fixes

- 写错了 padding 未生效 ([80d372e](https://github.com/shuoshubao/nbfe/commit/80d372e))
- 移除方法 convertObjectToArray,convertArrayToObject; 增加注释 ([9e98752](https://github.com/shuoshubao/nbfe/commit/9e98752))
- isIPhoneX 判断 ([cbea1f7](https://github.com/shuoshubao/nbfe/commit/cbea1f7))
- lodash 中有 isNil 方法 ([f63bacc](https://github.com/shuoshubao/nbfe/commit/f63bacc))
- min max 增加第一个参数 label ([efa1529](https://github.com/shuoshubao/nbfe/commit/efa1529))
- zh_CN.js 更名 moment.js ([cb564ba](https://github.com/shuoshubao/nbfe/commit/cb564ba))

## [0.2.7](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.6...@nbfe/tools@0.2.7) (2021-07-28)

### Features

- 合并包 @nbfe/config ([a8bae4c](https://github.com/shuoshubao/nbfe/commit/a8bae4c))

## [0.2.6](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.5...@nbfe/tools@0.2.6) (2021-07-27)

### Bug Fixes

- download 额外参数 ([c2dd105](https://github.com/shuoshubao/nbfe/commit/c2dd105))

## [0.2.5](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.4...@nbfe/tools@0.2.5) (2021-07-26)

### Features

- zh_CN ([db88c3c](https://github.com/shuoshubao/nbfe/commit/db88c3c))

## [0.2.4](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.3...@nbfe/tools@0.2.4) (2021-07-26)

### Features

- defineMomentLocaleZhCn ([491a2a8](https://github.com/shuoshubao/nbfe/commit/491a2a8))

## [0.2.3](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.2...@nbfe/tools@0.2.3) (2021-07-26)

### Bug Fixes

- isIPhoneX 变成方法调用形式 ([286c365](https://github.com/shuoshubao/nbfe/commit/286c365))

## [0.2.2](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.1...@nbfe/tools@0.2.2) (2021-07-26)

### Bug Fixes

- updateUrlQuery 的默认参数去掉 ([e01b619](https://github.com/shuoshubao/nbfe/commit/e01b619))

### Features

- ua 相关的判断变成方法, 避免直接调用 ([88d835f](https://github.com/shuoshubao/nbfe/commit/88d835f))

## [0.2.1](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.2.0...@nbfe/tools@0.2.1) (2021-05-24)

### Features

- numberRange 增加小数位数限制 decimalLength ([be8d657](https://github.com/shuoshubao/nbfe/commit/be8d657))

# [0.2.0](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.12...@nbfe/tools@0.2.0) (2021-03-22)

### Features

- 新增 isEveryTruthy isEveryFalsy isSomeTruthy isSomeFalsy ([1d88b3f](https://github.com/shuoshubao/nbfe/commit/1d88b3f))

## [0.1.12](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.11...@nbfe/tools@0.1.12) (2021-03-20)

### Features

- 新增 isEveryTruthy isEveryFalsy isSomeTruthy isSomeFalsy ([7596e84](https://github.com/shuoshubao/nbfe/commit/7596e84))

## [0.1.11](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.10...@nbfe/tools@0.1.11) (2021-01-26)

### Bug Fixes

- updateUrlQuery 取 query 错误 ([8dd24ce](https://github.com/shuoshubao/nbfe/commit/8dd24ce))

## [0.1.10](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.8...@nbfe/tools@0.1.10) (2021-01-22)

### Bug Fixes

- updateUrlQuery 实现有问题 ([a091f2f](https://github.com/shuoshubao/nbfe/commit/a091f2f))

### Features

- parseUrl 返回 origin 和 hostname ([2a36942](https://github.com/shuoshubao/nbfe/commit/2a36942))

## [0.1.9](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.8...@nbfe/tools@0.1.9) (2021-01-20)

### Bug Fixes

- updateUrlQuery 实现有问题 ([a091f2f](https://github.com/shuoshubao/nbfe/commit/a091f2ff2d972123fc7d81ceaa5a46b985ed7d72))

## [0.1.8](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.7...@nbfe/tools@0.1.8) (2021-01-19)

### Features

- 增加函数 updateUrlQuery ([74b14bb](https://github.com/shuoshubao/nbfe/commit/74b14bb))

## [0.1.7](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.6...@nbfe/tools@0.1.7) (2021-01-12)

### Features

- 增加工具方法 ([e2183f4](https://github.com/shuoshubao/nbfe/commit/e2183f4))

## [0.1.6](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.5...@nbfe/tools@0.1.6) (2020-12-30)

**Note:** Version bump only for package @nbfe/tools

## [0.1.5](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.4...@nbfe/tools@0.1.5) (2020-11-10)

### Features

- **rules:** 新增数字范围 numberRange ([8ad748d](https://github.com/shuoshubao/nbfe/commit/8ad748d))

## [0.1.4](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.3...@nbfe/tools@0.1.4) (2020-08-28)

### Bug Fixes

- 去掉 async-await ([ce0fd9c](https://github.com/shuoshubao/nbfe/commit/ce0fd9c))

## [0.1.3](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.2...@nbfe/tools@0.1.3) (2020-08-07)

### Features

- 升级构建 ([db9d436](https://github.com/shuoshubao/nbfe/commit/db9d436))
- 同步最新的工具库 ([c43cf3e](https://github.com/shuoshubao/nbfe/commit/c43cf3e))

## [0.1.2](https://github.com/shuoshubao/nbfe/compare/@nbfe/tools@0.1.1...@nbfe/tools@0.1.2) (2019-09-13)

### Features

- **packages:** @nbfe/js2html ([be7ab94](https://github.com/shuoshubao/nbfe/commit/be7ab94))

## 0.1.1 (2019-09-13)

**Note:** Version bump only for package @nbfe/tools
