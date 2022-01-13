/*
 * @Date: 2022-01-13 17:15:45
 * @LastEditors: liyf
 * @LastEditTime: 2022-01-13 17:25:02
 * @FilePath: /my-vue-docgen/src/test.ts
 */
import path from 'path'
const filePath = '/foo/bar/baz/asdf/quux'
const res = path.basename(filePath);
const dir = path.dirname(filePath);
const ext = path.extname(filePath);
const join = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
const parse = path.parse(filePath);
// path.relative(from, to)
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。

console.log(path.sep, path.delimiter)
console.log(res)
console.log(dir, ext, join, parse)

