module.exports = {  
  'Valid project structure.': require( 'grunt-scaffold-module' ).testStructure(),
  'Valid public methods.': require( 'grunt-scaffold-module' ).testMethods(),
  'Valid public classess.': require( 'grunt-scaffold-module' ).testClasses()       
}