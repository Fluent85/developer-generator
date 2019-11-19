var inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");
const pdf = require('html-pdf');


inquirer.prompt([
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHubUsername"
    },
    {
        type: "list",
        message: "Choose your favorite color:",
        name: "list",
        choices: ["blue", "red", "green", "orange", "black", "purple"]
    }
]).then(function(response){
    console.log(response)
    const queryUrl = `https://api.github.com/users/${response.gitHubUsername}/repos?per_page=100`;
    axios.get(queryUrl).then(function(res){
        const repos = res.data;
      
        const html = generateHTML(repos);
        next(html);
        
    })
})

const writeFileAsync = util.promisify(fs.writeFile);

function generateHTML(answers) {
  console.log(answers)
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${answers.html_url}</h1>
    <p class="lead">I am from ${answers.location}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${answers.github}</li>
      <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
}

async function next(html) {
 
  try {
    await writeFileAsync("index.html", html);

    var readHtml = fs.readFileSync('index.html', 'utf8');
    var options = { format: 'Letter' };
     
    pdf.create(readHtml, options).toFile('test.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); 
    });

    console.log("Successfully wrote to index.html");
  } catch (err) {
    console.log(err);
  }
}

