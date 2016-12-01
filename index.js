const fs = require('fs')
const path = require('path')
const prependFile = require('prepend-file')

function add(argv) {
	const info = require(path.join(__dirname, 'package.json'))
	const name = info.name.charAt(0).toUpperCase() + info.name.slice(1) || 'Project name'
	const version = info.version || '0.0.0'
	const homepage = info.homepage || 'http://your-homepage.com'
	const license = info.license || 'your'
	const author = info.author.split('<')[0].trim() || 'Author name'
	const year = new Date().getFullYear()
	const banner =  `/*!\n * ${name} v${version}\n * ${homepage}\n *\n * Copyright (c) ${year} ${author}\n * Licensed under the ${license} license\n*/\n\n`

	if (!fs.existsSync(path.dirname(argv[0]))) {
		console.log(`${argv[0]} Not exist!`)
		process.exit(1)
	}

	argv.map(file => {
		if (path.extname(file) === path.extname(argv[0])) {
			let filename = path.join(__dirname, file)
			prependFile(filename, banner, (error) => {
				if (error) {
					console.log('${file} Error');
					process.exit(1)
				}
				console.log(`${file} Banner added successfully`);
			})
		}
	})
}

exports.add = add
