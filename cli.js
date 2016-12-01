#!/usr/bin/env node
'use strict'

// Prefer the local installation
const resolveCwd = require('resolve-cwd')
const hasFlag = require('has-flag')

const localCLI = resolveCwd('banner-cli/cli')

if (!hasFlag('no-local') && localCLI && localCLI !== __filename) {
	console.log('Using local install of banner-cli.')
	require(localCLI)
	return
}

const banner = require('./')
const pkg = require('./package.json')
const argv = process.argv.slice(1)

if (argv.indexOf('--version') !== -1 || argv.indexOf('-v') !== -1) {
	console.log(pkg.version)
	process.exit(1)
}

if (argv.indexOf('--help') !== -1 || argv.indexOf('-h') !== -1 || argv.length >= 2) {
	console.log('\n$ banner-cli --help\n\n  Usage:\n\n    $ banner-cli <files> [<options>]\n\n  Options:\n\n    -h, --help              Display help information\n    -v, --version           Output version\n\n  Examples:\n\n    $ banner-cli dist/*.js\n    $ banner-cli dist/*.css\n')
	process.exit(1)
}

banner.add(argv)
