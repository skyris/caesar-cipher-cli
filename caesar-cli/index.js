const {pipeline} = require('stream');
const argv = require('./argvParser');
const readFromFileOrStdin = require('./readFromFileOrStdin');
const writeToFileOrStdout = require('./writeToFileOrStdout');

pipeline(
  readFromFileOrStdin(argv.input),
  writeToFileOrStdout(argv.output),
  (err, value) => {
    if (err) {
      console.error(err.message)
      process.exit(1);
    } else {
      console.log('value: ', value);
    }
  }
)
