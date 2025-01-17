/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var isArrayLike = require( '@stdlib/assert-is-array-like' );
var isTypedArrayLike = require( '@stdlib/assert-is-typed-array-like' );
var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var deepCopy = require( '@stdlib/utils-copy' );
var floor = require( '@stdlib/math-base-special-floor' );
var randu = require( '@stdlib/random-base-mt19937' ).factory;
var format = require( '@stdlib/string-format' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var defaults = require( './defaults.json' );
var validate = require( './validate.js' );


// MAIN //

/**
* Returns a function to create a random permutation of elements from an array-like object.
*
* @param {Options} [config] - function options
* @param {PositiveInteger} [config.seed] - integer-valued seed
* @param {string} [config.copy="shallow"] - default copy option (`deep`, `shallow` or `none`)
* @throws {TypeError} options argument must be an object
* @returns {Function} shuffle function
*
* @example
* var shuffle = factory({
*     'seed': 249
* });
* var data = [ 3, 8, 4, 8 ];
* var out = shuffle( data );
* // e.g., returns [ 4, 3, 8, 8 ]
*/
function factory( config ) {
	var conf;
	var rand;
	var err;

	conf = deepCopy( defaults );
	if ( arguments.length ) {
		err = validate( conf, config );
		if ( err ) {
			throw err;
		}
	}
	if ( config && hasOwnProp( config, 'seed' ) ) {
		rand = randu({
			'seed': config.seed
		});
	} else {
		rand = randu();
	}
	setReadOnly( shuffle, 'seed', rand.seed );
	setReadOnly( shuffle, 'PRNG', rand );

	rand = rand.normalized;

	return shuffle;

	/**
	* Returns a random permutation of elements in `arr`.
	*
	* @private
	* @param {(ArrayLike|TypedArrayLike)} arr - array-like object to shuffle
	* @param {Options} [options] - function options
	* @param {string} [options.copy] - string indicating whether to return a copy (`deep`,`shallow` or `none`)
	* @throws {TypeError} first argument must be array-like
	* @throws {TypeError} options must be an object
	* @throws {TypeError} must provide valid options
	* @returns {ArrayLike} the shuffled array-like object
	*
	* @example
	* var data = [ 1, 2, 3 ];
	* var out = shuffle( data );
	* // e.g., returns [ 3, 1, 2 ]
	*
	* @example
	* var data = [ 1, 2, 3 ];
	* var out = shuffle( data, {
	*     'copy': 'none'
	* });
	* var bool = ( data === out );
	* // returns true
	*/
	function shuffle( arr, options ) {
		var strflg;
		var level;
		var copy;
		var opts;
		var err;
		var out;
		var tmp;
		var N;
		var i;
		var j;

		if ( !( isArrayLike( arr ) || isTypedArrayLike( arr ) ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be array-like. Value: `%s`.', arr ) );
		}
		if ( arguments.length > 1 ) {
			opts = {};
			err = validate( opts, options );
			if ( err ) {
				throw err;
			}
		}
		copy = ( opts && opts.copy ) ? opts.copy : conf.copy;

		strflg = isString( arr );
		if ( strflg ) {
			arr = arr.split( '' );
			copy = 'none';
		}

		level = 0;
		if ( copy === 'shallow' ) {
			level += 1;
		} else if ( copy === 'deep' ) {
			level += 2;
		}
		N = arr.length;
		out = deepCopy( arr, level );

		// Note: we skip the first element, as no further swaps are possible given that all other indices are excluded from swapping...
		for ( i = N - 1; i > 0; i-- ) {
			// Generate an integer index on the interval [0,i]:
			j = floor( rand() * (i+1.0) );

			// Swap elements:
			tmp = out[ i ];
			out[ i ] = out[ j ];
			out[ j ] = tmp;
		}

		if ( strflg ) {
			out = arr.join( '' );
		}
		return out;
	}
}


// EXPORTS //

module.exports = factory;
