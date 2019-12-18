<a href="https://github.com/cjpatoilo/banner-cli"><img width="100%" src="https://cjpatoilo.com/banner-cli/artwork.png" alt="BannerCLI - Create a banner comment from package data."></a>

> Create a banner comment from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/banner-cli.svg?branch=master)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/efthn2yp6c57gu1b?svg=true)](https://ci.appveyor.com/project/cjpatoilo/banner-cli)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/cjpatoilo/banner-cli/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/banner-cli/status.svg)](https://david-dm.org/cjpatoilo/banner-cli)
[![Version Status](https://badge.fury.io/js/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Download Status](https://img.shields.io/npm/dt/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/banner-cli)


## Why it's awesome

A command line interface to add relevant information to your source code from package data. This lib reads the `package.json` files, then a banner is generated based on each of these values: `name`, `version`, `homepage`, `year`, `author` and `license`.


## Getting Started

**Install with npm**

```bash
$ npm install banner-cli
```

**Install with Yarn**

```bash
$ yarn add banner-cli
```

Run with npx (without installing)

```bash
$ npx banner-cli
```

*Note: Install this npm package with `-g` to global use or with `-D` to add the package as a devDependency in the `package.json` file of your project.*


## Usage

*Note: Glob support is truth. Find files using the patterns the shell uses, like stars and stuff.*

```bash
$ banner-cli dist/**/*.css
```

from `package.json` data:

```json
{
	"name": "milligram",
	"version": "1.4.0",
	"homepage": "https://milligram.io",
	"license": "MIT",
	"author": "CJ Patoilo <cjpatoilo@gmail.com>"
}
```

to add a banner comment:

```js
/*!
 * Milligram v1.4.0
 * https://milligram.io
 *
 * Copyright (c) 2019 CJ Patoilo
 * Licensed under the MIT license
 */
```


## CLI

```bash
$ banner-cli --help

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

```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/banner-cli#contributing).


## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://github.com/cjpatoilo/banner-cli#license).
