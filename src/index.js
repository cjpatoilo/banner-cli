'use strict'
const prependFile = require('prepend-file')

function resolve (value) {
	if (typeof value === 'boolean') value = undefined
	return value
}

function banner (argv) {
	const source = argv._
	const pkg = require(`${process.cwd()}/package.json`)
	const name = resolve(argv.n) || resolve(argv.name) || pkg.name.charAt(0).toUpperCase() + pkg.name.slice(1) || 'Project Name'
	const version = resolve(argv.t) || resolve(argv.tag) || pkg.version || '0.0.0'
	const homepage = resolve(argv.s) || resolve(argv.site) || pkg.homepage || 'https://npm.com'
	const license = resolve(argv.l) || resolve(argv.license) || pkg.license || 'Unlicensed'
	const author = resolve(argv.a) || resolve(argv.author) || pkg.author.split('<')[0].trim() || 'Unknown Author'
	const year = resolve(argv.y) || resolve(argv.year) || new Date().getFullYear()
	const template = `/*!
 * ${name} v${version}
 * ${homepage}
 *
 * Copyright (c) ${year} ${author}
 * Licensed under the ${license} license
 */\n
`

	if (!source.length) console.log(`File not found!`)
	else source.map(file => prependFile(file, template))

	process.exit(0)
}

module.exports = banner
