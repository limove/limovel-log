const fs = require('fs-extra')
let path = require('path')
const childProcess = require('child_process')

try {
  fs.removeSync('./lib/')
  // Copy front-end files

  childProcess.execSync(`tsc && babel src/components --out-dir lib --copy-files  --extensions ".ts,.tsx"`)
  console.log('success')
  // childProcess.exec('tsc --build tsconfig.prod.json');
} catch (err) {
  console.log(err)
}
