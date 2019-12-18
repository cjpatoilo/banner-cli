'use strict'
const glob = require('glob')
const prependFile = require('prepend-file')
const pkg = require(`${process.cwd()}/package.json`)

const getAuthorName = value => {
	if (typeof value === 'string') return value.split('<')[0].trim()
	if (value instanceof Object && typeof value.name === 'string') return value.name
	return ''
}

const unlicense = 'This is free and unencumbered software'
const defaultTemplate = 
`/*!
 * [name] v[tag]
 * [homepage]
 *
 * Copyright (c) [year] [author]
 * [license]
 */ 
`

function getBanner(template, options) {
	return template
			.replace('[name]', options.name.charAt(0).toUpperCase() + options.name.slice(1))
			.replace('[tag]', options.tag)
			.replace('[homepage]', options.homepage)
			.replace('[license]', options.license)
			.replace('[author]', options.author)
			.replace('[year]', options.year)
			.replace('[time]', Date.now())
			.split('<br>')
			.join("\n")

}

function banner (options = {}) {
	options.name = options.name || pkg.name || 'unknown'
	options.tag = options.tag || pkg.version || '0.0.0'
	options.homepage = options.homepage || pkg.homepage || `https://npm.com/${options.name}`
	options.license = options.license || pkg.license
	options.license = options.license ? `Licensed under the ${options.license} license` : unlicense
	options.author = options.author || getAuthorName(pkg.author)
	options.year = options.year || new Date().getFullYear()

	let template = options.template || defaultTemplate;
	let bannerText = getBanner(template, options)

	if (!options.source) {
		throw new Error(`File not found!`)
	} else {
		glob(options.source, (err, files) => {
			if (err) throw err
			files.map(file => prependFile.sync(file, bannerText))
			process.exit(0)
		})
	}
}

module.exports = banner
