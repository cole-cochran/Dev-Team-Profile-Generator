start = [
   {
      type: "list",
      name: "select",
      message: "Please choose an option below:",
      choices: [ "Add Engineer", "Add Intern", "Done!" ],
      validate: menuChoicesInput => {
         if ( menuChoicesInput === "Add Engineer" || menuChoicesInput === "Add Intern" ) {
            return true;
         }
         else if( menuChoicesInput === "Done!" ) {
            return true;
         }
         else {
            console.log( "Please choose an option below:" );
            return false;
         };
      }
   },
];
module.exports=start