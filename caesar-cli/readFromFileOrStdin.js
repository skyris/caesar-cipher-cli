const fs = require('fs');
const printAndExit = require('./printAndExit');

function readFromFileOrStdin(inputFile) {
  if (!inputFile) {
    return process.stdin;
  }
  try {
    fs.accessSync(inputFile, fs.constants.R_OK);
    return fs.createReadStream(inputFile);
  } catch (error) {
    printAndExit(error.message);
  }
}


module.exports = readFromFileOrStdin;
