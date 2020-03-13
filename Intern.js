// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)


function promptUser() {

    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: ' team member name'
    },
    {
        type: 'input',
        name: 'role',
        message: 'team member role'
    },
    {
        type: 'input',
        name: 'id',
        message: 'employee id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'team member email'
    },
    {
        type: 'input',
        name: 'school',
        message: 'intern school'

    }
    ]);
}
function generateHTML(answers) {
    return `
    <!DOCTYPE html>
    <html lang='en'>
    <head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <link rel='stylesheet' href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Team Profile generator</title>
    </head>
    <body>
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h4 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${answers.role}</h4>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${ answers.id}</li>
            <li class="list-group-item">Email:${answers.email}</li>
            <li class="list-group-item">School: ${answers.school}</li>
        </ul>
    </div>
</div>
</body>
</html>`;
}
promptUser()
    .then(function (answers) {
        const html = generateHTML(answers);
        return writeFileAsync('intern.html', html);
    })
    .then(function () {
        console.log('successfully wrote to html file')
    })
    .catch(function (err) {
        console.log(err)
    })

module.exports = Intern

