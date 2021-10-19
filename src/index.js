const inquirer = require('inquirer');
const fs=require('fs')
//ебать

const Manager = require('../lib/manager');
const man=require('../lib/Man')

const Engineer = require('../lib/engineer');
const eng=require('../lib/Eng')
const Intern = require('../lib/intern');
const int=require('../lib/Int')
const start=require('../lib/start')

let devTeam = [];
;

questions = {
    teamGen(devTeam) {
       const teamHold = [];
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
       <h1>${devTeam[0]}'S EMPLOYEES</h1>
    </div>
    <div class = "card-container row align-items-start ">
    `;
       teamHold.push(headTitle);

       for ( let i = 1; i < devTeam.length; i++ ) {
          let styleHTML = `
          <div class="card col text-white bg-dark mb-3" style="width: 18rem;">
            <div class="card-body ">
            <h5 class="card-title">${devTeam[i].role}</h5>
                  `;
 
                
                if (devTeam[i].role === "Manager") {
                   styleHTML += `<p class="card-text bi bi-telephone"> ${devTeam[i].name}   
                   </p>`;

                } else if (devTeam[i].role === "Intern") {
                   styleHTML += `<p  class="card-text bi bi-piggy-bank"> ${devTeam[i].name} 
                    </p>`;
                }
                else if (devTeam[i].role === "Engineer") {
                   styleHTML += `<p class="card-text bi bi-sd-card"> ${devTeam[i].name}  
                    </p>`;
                }
               
 
                styleHTML += `
             </div>
             <ul class="list-group list-group-flush">
             <li class="list-group-item"><p><b>Employee ID:</b> ${devTeam[i].id}</p></li>
             <li class="list-group-item"><p><b>Email:</b><br><a href = "mailto:${devTeam[i].email}">${devTeam[i].email}</a></p></li>
            
          `;
 
         
          if (devTeam[i].officeNumber ) {
             styleHTML += `<li class="list-group-item"><p><b>Office Number:</b><br>${devTeam[i].officeNumber}</p></li>`;
          }
          else if (devTeam[i].school) {
             styleHTML += `<li class="list-group-item"><p><b>School:</b><br>${devTeam[i].school}</p></li>`;
          }
          
          else if (devTeam[i].gitUsername) {
             styleHTML += `<li class="list-group-item"><p><b>GitHub:</b><br><a href = "https://github.com/${devTeam[i].gitUsername}">${devTeam[i].gitUsername}</a></p></li>`;
          }
          
          
 
          styleHTML += `
            </ul>
             </div>
          
          `;
          teamHold.push(styleHTML);
       };
 
       const htmlFooter = `
    </div>   
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

 </body>
 </html>
 `;
       teamHold.push (htmlFooter);
       return teamHold;
    }
 };


const writeToFile = (teamHold) => {
 fs.writeFile( "index.html", `${teamHold}`,(err)=>{
    err ? console.log(err) : console.log('Success! Check the index.html for your webpage.')
 })}

 function gennyHFile() {
    const teamHold = questions.teamGen(devTeam);
    writeToFile(teamHold);
 };
 

 function addInt() {
    inquirer.prompt(int)
    .then (function(data) {
       const internName = data.internName;
       const internId = data.internId;
       const internEmail = data.internEmail;
       const internSchool = data.internSchool;
       const teamMember = new Intern( internName, internId, internEmail, internSchool );
 
       devTeam.push(teamMember);
 
      
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
       
       devTeam.push(teamMember);
 
       
       addTeam();
    });
 };
 
 function addTeam() {
    inquirer.prompt( start )
    .then( function( data ) {
       switch ( data.select ) {
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
       
       devTeam.push(teamMember);
       addTeam();
    });
 };
 
 function init() {
    inquirer.prompt([
       {
          message: "Input the name of the Dev Team:",
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
       devTeam.push(teamName);
       addMan();
    });
 };

 init();