<a align="center" href="http://cjpatoilo.com/banner-cli"><img width="100%" src="http://cjpatoilo.com/banner-cli/images/thumbnail.png" alt="Create a banner comment from package data."></a>

> Create a banner comment from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/banner-cli.svg?branch=master)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/efthn2yp6c57gu1b?svg=true)](https://ci.appveyor.com/project/cjpatoilo/banner-cli)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/cjpatoilo/banner-cli/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/banner-cli.svg)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![Version Status](https://badge.fury.io/js/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Download Status](https://img.shields.io/npm/dt/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/banner-cli)


## Why it's awesome?

A command line interface to add relevant information to your source code from package data. This lib reads the `package.json` files, then a banner is generated based on each of these values: `name`, `version`, `homepage`, `year`, `author` and `license`.


## Install

```sh
$ npm install -g banner-cli
```

Install this npm package with `-g` to global use or with `-D` to add the package as a devDependency in the `package.json` file of your project.


## Usage

```
$ banner-cli --help

  Usage:

    $ banner-cli <files> [<options>]

  Options:

    -h, --help              Display help information
    -v, --version           Output version

  Examples:

    $ banner-cli dist/*.js
    $ banner-cli dist/*.css

```


## Example

from package data

```json
{
    "name": "milligram",
    "version": "1.0.0",
    "homepage": "http://milligram.github.io",
    "license": "MIT",
    "author": "CJ Patoilo <cjpatoilo@gmail.com>"
}
```

to create a banner comment

```js
/*!
 * Milligram v1.0.0
 * http://milligram.github.io
 *
 * Copyright (c) 2016 CJ Patoilo
 * Licensed under the MIT license
 */
```


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/banner-cli/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
