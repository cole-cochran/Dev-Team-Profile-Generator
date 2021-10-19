const Engineer = require("../lib/Engineer");

describe('what is the username',()=>{
it( "what is engineer's username", () => {
   const Username = "LukeSkywalker";
   const engineer = new Engineer( "Luke Skywalker", 2, "luke.skywalker@starwars.com", "LukeSkywalker");

   expect( engineer.gitUsername ).toEqual( 'LukeSkywalker' );
})
})
describe('see if gitGit() works',()=> {
it( "set hub account using gitGit()", () => {
   const Username = "LukeSkywalker";
   const engineer = new Engineer( "Luke Skywalker", 2, "luke.skywalker@starwars.com", "LukeSkywalker" );

   expect( engineer.gitGit()).toEqual( 'LukeSkywalker' );
})
})
describe('tests theRole()',()=>{
it( "see if theRole() returns \"Engineer\" ", () => {
   const Role = "Engineer";
   const engineer = new Engineer( "Luke Skywalker", 2, "luke.skywalker@starwars.com", "Engineer");

   expect( engineer.theRole()).toEqual( "Engineer" );
})
})