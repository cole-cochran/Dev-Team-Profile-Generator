const Employee= require('../lib/Employee')

const employee = new Employee('Luke Skywalker', 2, 'luke.skywalker@starwars.com');
describe('init() create employee ',()=>{
it( "Create an employee thingymajiger", () => {
const employee = new Employee ( "Luke Skywalker", 2, 'luke.skywalker@starwars.com');
 expect(employee).toBeInstanceOf( Employee );
  expect( employee.name ).toEqual( 'Luke Skywalker' );
   expect( employee.id ).toEqual( 2 );
    expect( employee.email ).toEqual( 'luke.skywalker@starwars.com' );
 }
 )
}
 )
 describe('Verify if theName() works', ()=>{
 it( "sets name", () => {
    const Name = "Luke Skywalker";
    const employee = new Employee(Name);
 
    expect( employee.theName()).toEqual(Name );
 })
 }    
 )
 describe('Verify if theId() works',()=>{
 it( "Check the ID", () => {
    const Id = 2;
    const employee = new Employee( "Luke Skywalker", Id);
 
    expect( employee.theId()).toEqual(Id);
 })
 })
describe('Verify Email Works',()=>{
 it( "Verification Complete", () => {
    const Email = "luke.skywalker@starwars.com";
    const employee = new Employee( "Luke Skywalker", 2, Email );
 
    expect(employee.theEmail()).toEqual(Email);
 })
})
describe('verify if theRole works',()=>{
 it( " returns \"Employee\" ", () => {
    const Role = "Employee";
    const employee = new Employee( "Luke Skywalker", 2, "luke.skywalker@starwars.com" );
 
    
    expect( employee.theRole()).toEqual( Role );
 })
 
})