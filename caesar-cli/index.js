const {pipeline} = require('stream');
const argv = require('./argvParser');
const readFromFileOrStdin = require('./readFromFileOrStdin');
const writeToFileOrStdout = require('./writeToFileOrStdout');
const caesarCipherTransform = require('./caesarCipherTransform');
const printAndExit = require('./printAndExit');

pipeline(
  readFromFileOrStdin(argv.input),
  caesarCipherTransform(argv.shift, argv.action),
  writeToFileOrStdout(argv.output),
  (err) => {
    if (err) {
      printAndExit(err.message);
    }
  }
)
