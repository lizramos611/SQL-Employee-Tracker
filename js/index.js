
//requiring sql and inquirer 
const inquirer = require('inquirer');
const mysql = require('mysql2');
const conTable = require('console.table');

//requiring all other js files needed
const newRole = require('./newrole');
const newDepartment = require('./newdepartment');
const newEmployee = require('./newemployee');

//connecting to my sql db
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Fucklogic1!',
        database: 'employee_db'

    },
);



const questions = () => {
    return inquirer.prompt 
    ([
        {
type: 'list',
name: 'first',
message: 'What would you like to do first?',
choices: [
    "View all Employees",
    'Add Roles',
    'Add Employees',
    "View All Departments",
    'View All Roles',
    'View All Employees',
    'Update An Employees Role',

]

}

])

};