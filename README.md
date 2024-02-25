<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Shuffle

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Shuffle elements of an array-like object.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import shuffle from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-shuffle@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/random-shuffle/tags). For example,

```javascript
import shuffle from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-shuffle@v0.2.1-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-shuffle@deno/mod.js';
```

#### shuffle( arr\[, options] )

Shuffles elements of an array-like object.

```javascript
var arr = [ 1, 2, 3 ];
var out = shuffle( arr );
// e.g., returns [ 3, 1, 2 ]
```

The function accepts the following `options`:

-   **copy**: `string` indicating whether to return a copy (`deep`,`shallow` or `none`). Default: `shallow`.

By default, the function returns a shallow copy. To mutate the input `array` (e.g., when input values can be discarded or when optimizing memory usage), set `copy` to `none`.

```javascript
var arr = [ 1, 2, 3 ];
var out = shuffle( arr, {
    'copy': 'none'
});
var bool = ( arr === out );
// returns true
```

To return a deep copy, set the `copy` option to `deep`.

```javascript
var obj = {
    'beep': 'boop'
};
var arr = [ [ obj ], [ obj ], [ obj ] ];

// Deep copy:
var out = shuffle( arr, {
    'copy': 'deep'
});
var bool = ( arr === out );
// returns false

bool = ( arr[2] === out[2] );
// returns false

// Shallow copy:
out = shuffle( arr, {
    'copy': 'shallow'
});
bool = ( arr === out );
// returns false

bool = ( arr[2] === out[2] );
// returns true
```

#### shuffle.factory( \[options] )

Returns a `function` to shuffle elements of `array`-like objects.

```javascript
var myshuffle = shuffle.factory();
```

The function accepts the following `options`:

-   **copy**: `string` specifying the default copy option (`deep`,`shallow` or `none`). Default: `shallow`.
-   **seed**: pseudorandom number generator seed.

To seed the underlying pseudorandom number generator, set the `seed` option.

```javascript
var myshuffle = shuffle.factory({
    'seed': 239
});

var out = myshuffle( [ 0, 1, 2, 3, 4 ] );
// e.g., returns [ 3, 4, 1, 0, 2 ]
```

By default, the returned functions create shallow copies when shuffling. To override the default `copy` strategy, set the `copy` option.

```javascript
var myshuffle = shuffle.factory({
    'copy': 'none',
    'seed': 867
});

// Created shuffle function mutates input array by default:
var arr = [ 1, 2, 3, 4, 5, 6 ];
var out = myshuffle( arr );
var bool = ( arr === out );
// returns true

// Default option can be overridden:
arr = [ 1, 2, 3, 4 ];
out = myshuffle( arr, {
    'copy': 'shallow'
});
bool = ( arr === out );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import shuffle from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-shuffle@deno/mod.js';

var result;
var data;
var i;

data = new Array( 20 );
for ( i = 0; i < data.length; i++ ) {
    data[ i ] = i;
}

for ( i = 0; i < 10; i++ ) {
    result = shuffle( data );
    console.log( result );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random-sample`][@stdlib/random/sample]</span><span class="delimiter">: </span><span class="description">sample elements from an array-like object.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-shuffle.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-shuffle

[test-image]: https://github.com/stdlib-js/random-shuffle/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/random-shuffle/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-shuffle/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-shuffle?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-shuffle.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-shuffle/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-shuffle/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-shuffle/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-shuffle/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-shuffle/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-shuffle/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-shuffle/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-shuffle/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-shuffle/main/LICENSE

<!-- <related-links> -->

[@stdlib/random/sample]: https://github.com/stdlib-js/random-sample/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
