#!/usr/bin/env node
'use strict'

const cli = require('../src/index')
const pkg = require('../package.json')
const argv = require('minimist')(process.argv.slice(2))

if (argv.version || argv.v) {
	console.log(pkg.version)
	process.exit(0)
}

if (argv.help || argv.h) {
	console.log(`
  Usage:

    $ banner-cli <files> [<options>]

  Options:

    -n, --name              Define project name
    -t, --tag               Define tag version
    -s, --site              Define homepage
    -a, --author            Define author
    -y, --year              Define year
    -l, --license           Define license
    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ banner-cli dist/*.js
    $ banner-cli dist/*.css --author 'CJ Patoilo' --license MIT --site https://milligram.github.io
	`)
	process.exit(0)
}

if (argv._.length) {
	cli(argv)
}
