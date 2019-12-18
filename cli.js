#!/usr/bin/env node
'use strict'

const argv = require('rasper')(process.argv.slice(2))

const pkg = require('./package.json')
const banner = require('./')

let options = {}

if (argv.v || argv.version) {
	console.log(pkg.version)
	process.exit(0)
}

if (argv.h || argv.help) {
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
        --template          Define template
    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ banner-cli dist/**/*.js
    $ banner-cli dist/**/*.css --author 'CJ Patoilo' --license MIT --site https://milligram.io
    $ banner-cli dist/**/*.css --template '/*<br> [name]<br> [tag]<br> [site]<br> [author]<br> [year]<br> [license]<br> [time] */'
	`)
	process.exit(0)
}

if (argv.n && argv.n !== true) {
	options.name = argv.n
}

if (argv.name && argv.name !== true) {
	options.name = argv.name
}

if (argv.t && argv.t !== true) {
	options.tag = argv.t
}

if (argv.tag && argv.tag !== true) {
	options.tag = argv.tag
}

if (argv.s && argv.s !== true) {
	options.homepage = argv.s
}

if (argv.site && argv.site !== true) {
	options.homepage = argv.site
}

if (argv.l && argv.l !== true) {
	options.license = argv.l
}

if (argv.license && argv.license !== true) {
	options.license = argv.license
}

if (argv.a && argv.a !== true) {
	options.author = argv.a
}

if (argv.author && argv.author !== true) {
	options.author = argv.author
}

if (argv.year && argv.year !== true) {
	options.year = argv.year
}

if (argv.y && argv.y !== true) {
	options.year = argv.y
}

if (argv.template && argv.template !== true) {
	options.template = argv.template
}

if (argv._[0]) {
	options.source = argv._[0]
	banner(options)
}
