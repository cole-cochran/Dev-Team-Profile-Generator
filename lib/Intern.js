const Employee = require( "../lib/Employee" );

class Intern extends Employee {
   constructor( name, id, email, school ) {
      super( name, id, email );
      this.school = school;
      this.role = 'Intern';
   };

   theSchool() {
      return this.school;
   };

   theRole() {
      return this.role;
   };
};

module.exports = Intern;