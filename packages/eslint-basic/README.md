# eslint基础配置
```txt
npm i eslint eslint-plugin-promise eslint-plugin-import eslint-plugin-n -g
```
## javaScript语法拓展
| packageName                                                                  | -                                 |
| ---------------------------------------------------------------------------- | --------------------------------- |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | javaScript Promise 语法规范       |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)   | javaScript import/export 语法规范 |
| [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)             | Node.js 规范                      |
## dependencies
| packageName                                                                                  | -                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- |
| [eslint-plugin-eslint-comments](https://mysticatea.github.io/eslint-plugin-eslint-comments/) | eslint指令注释规范                       |
| [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html)                       | lint & fix `html文件` 中的inline scripts |
| [eslint-plugin-markdown](https://www.npmjs.com/package/eslint-plugin-markdown)               | `markdown文件` 插件                      |
| [eslint-plugin-jsonc](https://www.npmjs.com/package/eslint-plugin-jsonc)                     | json,jsonc,json5 files                   |

## 自定义规范
[eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise)
| rules                 | level | -                 |
| --------------------- | ----- | ----------------- |
| `promise/param-names` | error | promise参数名规范 |