const inquirer = require("inquirer");
const fs=require('fs')

const Manager = require( "../lib/Manager" );
const man=require('../lib/man')

const Engineer = require( "../lib/Engineer" );
const eng=require('../lib/eng')
const Intern = require( "../lib/Intern" );
const int=require('../lib/int')
const start=require('../lib/start')

let teamHoldy = [];
;

questions = {
    headacheGen(teamHoldy) {
       const holdyboy = [];
       const headTitle = `
 <!DOCTYPE html>
 <html lang = "en">
 <head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device-width, initial scale = 1.0">
    <meta http-equiv = "X-UA-Compatible" content = "ie = edge">
    <title>TEAMS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css">
 </head>
 <body>
    <div class = "title-bar text-center">
       <h1>${teamHoldy[0]}'s Employees</h1>
    </div>
    <div class = "card-container row align-items-start ">
    `;
       holdyboy.push(headTitle);

       for ( let i = 1; i < teamHoldy.length; i++ ) {
          let headacheHtml = `
          <div class="card col text-white bg-dark mb-3" style="width: 18rem;">
            <div class="card-body ">
            <h5 class="card-title">${teamHoldy[i].role}</h5>
                  `;
 
                
                if (teamHoldy[i].role === "Manager") {
                   headacheHtml += `<p class="card-text bi bi-telephone"> ${teamHoldy[i].name}   
                   </p>`;

                } else if (teamHoldy[i].role === "Intern") {
                   headacheHtml += `<p  class="card-text bi bi-piggy-bank"> ${teamHoldy[i].name} 
                    </p>`;
                }
                else if (teamHoldy[i].role === "Engineer") {
                   headacheHtml += `<p class="card-text bi bi-sd-card"> ${teamHoldy[i].name}  
                    </p>`;
                }
               
 
                headacheHtml += `
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item"><p><b>Employee ID:</b> ${teamHoldy[i].id}</p></li>
             <li class="list-group-item"><p><b>Email:</b><br><a href = "mailto:${teamHoldy[i].email}">${teamHoldy[i].email}</a></p></li>
            
          `;
 
         
          if (teamHoldy[i].officeNumber ) {
             headacheHtml += `<li class="list-group-item"><p><b>Office Number:</b><br>${teamHoldy[i].officeNumber}</p></li>`;
          }
          else if (teamHoldy[i].school) {
             headacheHtml += `<li class="list-group-item"><p><b>School:</b><br>${teamHoldy[i].school}</p></li>`;
          }
          
          else if (teamHoldy[i].gitUsername) {
             headacheHtml += `<li class="list-group-item"><p><b>GitHub:</b><br><a href = "https://github.com/${teamHoldy[i].gitUsername}">${teamHoldy[i].gitUsername}</a></p></li>`;
          }
          
          
 
          headacheHtml += `
            </ul>
             </div>
          
          `;
          holdyboy.push(headacheHtml);
       };
 
       const htmlFooter = `
    </div>   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
 </body>
 </html>
 `;
       holdyboy.push (htmlFooter);
       return holdyboy;
    }
 };


const writeToFile = (holdyboy) => {
 fs.writeFile( "index.html", `${holdyboy}`,(err)=>{
    err ? console.log(err) : console.log('itwork')
 })}

 function gennyHFile() {
    const holdyboy = questions.headacheGen(teamHoldy);
    writeToFile(holdyboy);
 };
 

 function addInt() {
    inquirer.prompt(int)
    .then (function(data) {
       const internName = data.internName;
       const internId = data.internId;
       const internEmail = data.internEmail;
       const internSchool = data.internSchool;
       const teamMember = new Intern( internName, internId, internEmail, internSchool );
 
       teamHoldy.push(teamMember);
 
      
       addTeam();
    });
 };
 
 function addEng() {
    inquirer.prompt( eng )
    .then ( function( data ) {
       const engineerName = data.engineerName;
       const engineerId = data.engineerId;
       const engineerEmail = data.engineerEmail;
       const engineergitUsername = data.engineergitUsername;
       const teamMember = new Engineer( engineerName, engineerId, engineerEmail, engineergitUsername );
       
       teamHoldy.push(teamMember);
 
       
       addTeam();
    });
 };
 
 function addTeam() {
    inquirer.prompt( start )
    .then( function( data ) {
       switch ( data.choosie ) {
          case "Add Engineer":
             addEng();
             break;
          case "Add Intern":
             addInt();
             break;
          case "Done!":
             gennyHFile();
          break;
       };
    });
 };
 
 function addMan() {
    inquirer.prompt(man)
    .then( function(data) {
       const managerName = data.managerName;
       const managerId = data.managerId;
       const managerEmail = data.managerEmail;
       const managerOfficeNum = data.managerOfficeNum;
       const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNum);
       
       teamHoldy.push(teamMember);
       addTeam();
    });
 };
 
 function init() {
    inquirer.prompt([
       {
          message: "Input Name for the things plz:",
          name: "teamName",
          validate: teamNameInput => {
             if ( teamNameInput && teamNameInput.trim().length > 0 ) {
                return true;
             }
             else {
                console.log( "Input name:" );
                return false;
             };
          }
       }
    ])
    .then(function(data) {
       const teamName = data.teamName.toUpperCase()
       teamHoldy.push(teamName);
       addMan();
    });
 };

 init();