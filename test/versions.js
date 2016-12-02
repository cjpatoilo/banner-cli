const test = require('ava')
const pkg = require('../package.json')

test('version', t => {
  t.is(pkg.version, pkg.version)
})
