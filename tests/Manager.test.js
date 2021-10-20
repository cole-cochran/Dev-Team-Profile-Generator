const Manager = require('../lib/Manager');
//const { describe } = require("@jest/globals");

const manager = new Manager('Anakin Skywalker', 1, 'darth.vader@starwars.com', 66);
describe('biggest mikes office number',()=>{
it( "big mikes office number", () => {
   //const Number = 66;
   const manager = new Manager( "Anakin Skywalker", 1, "darth.vader@starwars.com", 66 );

   expect( manager.officeNumber ).toEqual( 66 );
})
})
describe('test theRole()',()=>{
it( "see if theRole() returns \"Manager\" ", () => {
   //const Role = "Manager";
   const manager = new Manager( "Anakin Skywalker", 1, "darth.vader@starwars.com", 66 );

   expect( manager.theRole()).toEqual( "Manager" );
})
})