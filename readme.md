# banner-cli

> Create a banner comment from package data.

[![Travis Status](https://travis-ci.org/cjpatoilo/banner-cli.svg?branch=master)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/wabkk000uh6d97xk?svg=true)](https://ci.appveyor.com/project/cjpatoilo/banner-cli)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/cjpatoilo/banner-cli/dashboard)
[![Dependencies Status](https://david-dm.org/cjpatoilo/banner-cli.svg)](https://travis-ci.org/cjpatoilo/banner-cli?branch=master)
[![Download Status](https://img.shields.io/npm/dt/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Version Status](https://badge.fury.io/js/banner-cli.svg)](https://www.npmjs.com/package/banner-cli)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/cjpatoilo/banner-cli)


## Why it's awesome?

Installing a npm package with --save will add the package as a dependency in your project's package.json file. This library reads that file, then reads the package.json files for each of those dependencies. Based on these connections, it determines the order your scripts must be included before injecting them between placeholders in your source code.


## Download

**Install with npm**

```sh
$ npm install -g banner-cli
```

**Install with Yarn**

```sh
$ yarn install -g banner-cli
```


## Table of Contents

- [Getting Started](http://cjpatoilo.com/banner-cli#getting-started)
- [Examples](http://cjpatoilo.com/banner-cli#examples)


## Contributing

Want to contribute? Follow these [recommendations](https://github.com/cjpatoilo/banner-cli/blob/master/.github/contributing.md).


## License

Designed with ♥ by [CJ Patoilo](http://cjpatoilo.com). Licensed under the [MIT License](http://cjpatoilo.mit-license.org).
