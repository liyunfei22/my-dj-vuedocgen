/*
 * @Date: 2022-01-13 17:15:45
 * @LastEditors: liyf
 * @LastEditTime: 2022-01-13 17:25:02
 * @FilePath: /my-vue-docgen/src/test.ts
 */
// import path from 'path'
// const filePath = '/foo/bar/baz/asdf/quux'
// const res = path.basename(filePath);
// const dir = path.dirname(filePath);
// const ext = path.extname(filePath);
// const join = path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// const parse = path.parse(filePath);
// path.relative(from, to)
// path.resolve() 方法将路径或路径片段的序列解析为绝对路径。

// console.log(path.sep, path.delimiter)
// console.log(res)
// console.log(dir, ext, join, parse)
// Example of a more typical implementation structure

// Initialize watcher.
import chokidar from 'chokidar'

const watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../, // ignore dotfilesss
  persistent: true
});

// Something to use when events are received.
const log = console.log.bind(console);
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));

// More possible events.
watcher
  .on('addDir', path => log(`Directory ${path} has been added`))
  .on('unlinkDir', path => log(`Directory ${path} has been removed`))
  .on('error', error => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => { // internal
    log('Raw event info:', event, path, details);
  });

// 'add', 'addDir' and 'change' events also receive stat() results as second
// argument when available: https://nodejs.org/api/fs.html#fs_class_fs_stats
watcher.on('change', (path, stats) => {
  if (stats) console.log(`File ${path} changed size to ${stats.size}`);
});

// Watch new files.
// watcher.add('new-file');
// watcher.add(['new-file-2', 'new-file-3', '**/other-file*']);

// // Get list of actual paths being watched on the filesystem
// var watchedPaths = watcher.getWatched();

// // Un-watch some files.
// await watcher.unwatch('new-file*');

// // Stop watching.
// // The method is async!
// watcher.close().then(() => console.log('closed'));

// // Full list of options. See below for descriptions.
// // Do not use this example!
// chokidar.watch('file', {
//   persistent: true,

//   ignored: '*.txt',
//   ignoreInitial: false,
//   followSymlinks: true,
//   cwd: '.',
//   disableGlobbing: false,

//   usePolling: false,
//   interval: 100,
//   binaryInterval: 300,
//   alwaysStat: false,
//   depth: 99,
//   awaitWriteFinish: {
//     stabilityThreshold: 2000,
//     pollInterval: 100
//   },

//   ignorePermissionErrors: false,
//   atomic: true // or a custom 'atomicity delay', in milliseconds (default 100)
// });

