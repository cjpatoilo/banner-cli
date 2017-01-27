'use strict'
const prependFile = require('prepend-file')
const pkg = require(`${process.cwd()}/package.json`)

function banner (options) {
	options = options || {}
	options.name = options.name || pkg.name || 'unknown'
	options.tag = options.tag || pkg.version || '0.0.0'
	options.homepage = options.homepage || pkg.homepage || `https://npm.com/${options.name}`
	options.license = options.license || pkg.license || 'unknown'
	options.author = options.author || pkg.author.split('<')[0].trim() || ''
	options.year = options.year || new Date().getFullYear()

	const template = `/*!
 * ${options.name.charAt(0).toUpperCase() + options.name.slice(1)} v${options.tag}
 * ${options.homepage}
 *
 * Copyright (c) ${options.year} ${options.author}
 * Licensed under the ${options.license} license
 */\n
`

	if (!options.source) console.log(`File not found!`)
	else options.source.map(file => prependFile(file, template))

	process.exit(0)
}

module.exports = banner
