// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile)


function promptUser() {

    return inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'engineer name'
    },
    {
        type: 'input',
        name: 'github',
        message: 'engineer github account'
    },
    {
        type: 'input',
        name: 'role',
        message: 'engineer role'
    },
    {
        type: 'input',
        name: 'email',
        message: 'engineer email'
    },
    {
        type: 'input',
        name: 'id',
        message: 'engineer team id'
    }
    ])
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
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${answers.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:{{ email }}">${answers.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank" rel="noopener noreferrer">{{ github }}</a></li>
        </ul>
    </div>
</div>     
        `

}
promptUser()
    .then(function (answers) {
        const html = generateHTML(answers);
        return writeFileAsync('engineer.html', html);
    })
    .then(function () {
        console.log('successfully wrote to html file')
    })
    .catch(function (err) {
        console.log(err)
    })

module.exports = Engineer







