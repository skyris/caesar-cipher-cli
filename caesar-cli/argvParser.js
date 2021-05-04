const flags = process.argv.slice(2);
const argv = {};
for (let i = 0; i < flags.length; i += 2) {
  switch(flags[i]) {
    case '-a':
    case '--action':
      argv['action'] = flags[i + 1];
      break;
    case '-s':
    case '--shift':
      argv['shift'] = parseInt(flags[i + 1]);
      break;
    case '-i':
    case '--input':
      argv['input'] = flags[i + 1];
      break;
    case '-o':
    case '--output':
      argv['output'] = flags[i + 1];
      break;
  }
}


module.exports = argv;
