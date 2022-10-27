# eslint javaScript 配置

## 如何在vscode将此配置设为默认？
先全局安装依赖
```txt
npm i eslint eslint-plugin-promise eslint-plugin-import eslint-plugin-n -g
```
```json
{
  "eslint.lintTask.options": "https://github.com/YomukiZRJ/normalization/tree/main/packages/eslint-config-js/.eslintrc.json"
}
```
## javaScript语法拓展
| packageName                                                                  | -                                 |
| ---------------------------------------------------------------------------- | --------------------------------- |
| [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise) | javaScript Promise 语法规范       |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)   | javaScript import/export 语法规范 |
| [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)             | Node.js 规范                      |

## 规范参考
- [eslint中文网](http://eslint.cn/docs/rules/)
- [antfu大佬的规范](https://github.com/antfu/eslint-config/blob/main/packages/basic/index.js)
- [standard](https://github.com/standard/eslint-config-standard/blob/master/.eslintrc.json)