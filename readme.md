# banner-cli

> Create a banner comment from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/banner-cli.svg?branch=master)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/wabkk000uh6d97xk?svg=true)](https://ci.appveyor.com/project/cjpatoilo/banner-cli)
[![Codacy Status](https://img.shields.io/codacy/grade/c740737373484d0cb1e322896291104d/master.svg)](https://www.codacy.com/app/cjpatoilo/banner-cli/dashboard)
[![Coverage Status](https://coveralls.io/repos/github/cjpatoilo/banner-cli/badge.svg?branch=master)](https://coveralls.io/github/cjpatoilo/banner-cli?branch=master)
[![Dependencies Status](https://david-dm.org/cjpatoilo/banner-cli.svg)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![Version Status](https://badge.fury.io/js/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Download Status](https://img.shields.io/npm/dt/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/banner-cli)


## Why it's awesome?

Installing a npm package with --global will add the package as a dependency in your project's package.json file. This library reads that file, then reads the package.json files for each of those dependencies. Based on these connections, it determines the order your scripts must be included before injecting them between placeholders in your source code.

**Example**

```js
/*!
 * Milligram v1.0.0
 * http://milligram.github.io
 *
 * Copyright (c) 2016 CJ Patoilo
 * Licensed under the MIT license
 */
```


## Installation

```sh
$ npm install banner-cli --global
```


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


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/banner-cli/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
