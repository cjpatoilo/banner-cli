const test = require('ava')
const child = require('child_process')
const pkg = require('../package.json')

test('version', t => {
  child.exec('git describe --always --tag --abbrev=0', { cwd: __dirname }, (error, stdout) => {
    if (error) throw error
    t.is(`v${pkg.version}`, stdout.split('\n').join(''))
  })
})
