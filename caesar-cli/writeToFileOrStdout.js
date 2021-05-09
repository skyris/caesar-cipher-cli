const fs = require('fs');
const printAndExit = require('./printAndExit');

function writeToFileOrStdout(outputFile) {
  if (!outputFile) {
    return process.stdout;
  }
  try {
    fs.accessSync(outputFile, fs.constants.W_OK);
    return fs.createWriteStream(outputFile, {flags: 'a'});
  } catch (error) {
    printAndExit(error.message);
  }
}


module.exports = writeToFileOrStdout;
