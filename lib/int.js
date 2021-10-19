
   
int = [{
    type: "input",
    name: "internName",
    message: "Input intern name:",
    validate: internNameInput => {
       if ( internNameInput && internNameInput.length > 0 ) {
          return true;
       }
       else {
          console.log( "Input intern name:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "internId",
    message: "Input intern ID:",
    validate: internIdInput => {
       if ( internIdInput && internIdInput.length > 0 ) {
          return true;
       }
       else {
          console.log( "Input intern ID:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "internEmail",
    message: "Input intern email:",
    validate: internEmailInput => {
       if ( internEmailInput && internEmailInput.length > 0 ) {
          // Check for valid email address format
        
             return true;
          
       }
       else {
          console.log( "Input intern email:" );
          return false;
       };
    }
 },
 {
    type: "input",
    name: "internSchool",
    message: "Input intern school:",
    validate: internSchoolInput => {
       if ( internSchoolInput && internSchoolInput.length > 0 ) {
          return true;
       }
       else {
          console.log( "Input intern school:" );
          return false;
       };
    }
 }];
 module.exports=int