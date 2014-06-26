/**
 * Essential Tests
 *
 * @type {{Methods: exports, Utility: exports, Parse: exports, createSuite: exports}}
 */
module.exports = {
  Methods: require( './unit/methods' ),
  Utility: require( './unit/utility' ),
  Parse: require( './unit/parse-junit' ),
  createSuite: require( './functional/create-suite' )
}