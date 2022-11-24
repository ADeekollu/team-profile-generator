const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateHtml = team => {

  const generateManager = manager => {
    return `
<div class="card employee-card"
  <div class="card-header bg-primary text-white"
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.getId()}</li>      
      <li class="list-group-item">Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
    </ul>
  </div>
</div> 
      `;
  };

  const generateEngineer = engineer => {
    return `
      <div class="card employee-card"
  <div class="card-header bg-primary text-white"
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${engineer.getId()}</li>      
      <li class="list-group-item">Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}</a></li>
    </ul>
  </div>
</div> 
      
      `;
  };

  const generateIntern = intern => {
    return `
      <div class="card employee-card"
  <div class="card-header bg-primary text-white"
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.getId()}</li>      
      <li class="list-group-item">Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div> 
      
      `;
  };


  const html = []

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
    .join("")
  );

  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
  );

  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
  );

 html.join("");




  // module.exports = team => {

    return `
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"
      ></script>
  
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger"
              <h1 class="text-center text-light bg-dark">My Team</h1>
            </div>
          </div>  
      </div>
      <div class="container">
        <div class="row">                
            <div class="row team-area col-12 d-flex justify-content-center">
                ${html}
            </div>       
        </div>
      </div>
  </body>
  </html>
  
      `;
  };

module.exports = generateHtml
