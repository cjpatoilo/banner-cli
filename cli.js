#!/usr/bin/env node
'use strict'

const banner = require('./')
const pkg = require('./package.json')
const argv = process.argv.slice(2)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
	console.log(pkg.version)
	process.exit(1)
}

if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1) {
	console.log('\n$ banner-cli --help\n\n  Usage:\n\n    $ banner-cli <files> [<options>]\n\n  Options:\n\n    -h, --help              Display help information\n    -v, --version           Output version\n\n  Examples:\n\n    $ banner-cli dist/*.js\n    $ banner-cli dist/*.css\n')
	process.exit(1)
}

banner.add(argv)
