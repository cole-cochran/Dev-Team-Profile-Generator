const Intern = require("../lib/Intern");
const intern = new Intern('LukeSkywalker', 2, 'luke.skywalker@starwars.com', 'YODA');


describe('see if theRole() works',()=>{
it( "se if theRole() returns \"Intern\" ", () => {
    const Role = "Intern";
    const intern = new Intern( 'Luke Skywalker', 2, 'luke.skywalker@starwars.com', 'YODA' );
 
    expect( intern.theRole()).toEqual( Role );
 })
})
describe('tests theSchool',()=>{
 it( "Set school using theSchool().", () => {
    const School = "YODA";
    const intern = new Intern( 'Luke Skywalker', 2, 'luke.skywalker@starwars.com', School );
 
    expect( intern.theSchool()).toEqual( School );
 })
 })
 describe('set school',()=>{
 it( "get school", () => {
    const School = "YODA";
    const intern = new Intern( 'Luke Skywalker', 2, 'luke.skywalker@starwars.com', School );
 
    expect( intern.school ).toEqual( School );
 })
 })