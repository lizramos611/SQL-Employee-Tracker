
//requiring sql and inquirer and express

const inquirer = require('inquirer');
const mysql = require('mysql2');
const conTable = require('console.table');

//requiring all other js files needed
const newRole = require('./newrole');
const newDepartment = require('./newdepartment');
const newEmployee = require('./newemployee');
const { allowedNodeEnvironmentFlags } = require('process');
const { type } = require('os');

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
    'Add New Role',
    'Add New Department',
    'Add New Employee',
    "View All Departments",
    'View All Roles',
    'View All Employees',
    'Update An Employees Role',
    'All Done!'

]

}

])
.then(function(data) {
    if(data.first == "View All Employees"){
        db.query('SELECT * FROM employee', function (err, results){
            return questions();
        });
    } else if (data.first == "View All Departments") {
        return questions();
    } else if(data.first == "Add New Department"){
        addDepartment();
    } else if (data.first == "Add New Employee") {
        addEmployee();
    } else if (data.first == "Add New Role") {
        addRole();
    }else if(data.first === "Update An Employees Role"){
        return questions();
    } else if(data.first === "All Done!"){
        process.exit;
    }
})

};

const addDepartment = () => {
    return inquirer.prompt([{
        type: 'input',
        name: 'departmentName',
        message: 'What is the name of the new department?',

    }])
    .then(function(department){

        const newDepartmentAdded = new newDepartment (department.departmentName)
        const name = newDepartmentAdded.name
        
        db.query('INSERT INTO department VALUES (?)', name, (err,results) => {
            if (err) {
                return questions();
            } else {
                return questions();
            }
        }
    )


    })};


    const addRoles = () => {
        return inquirer.prompt
        ([
            {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the new role?',
        },
            {
            type: 'input',
            name: 'rolePay',
            message: 'What is the salary for this role?'
            }
    ])
    .then(function(roleInput){
        let title = roleInput.roleTitle
        let pay = roleInput.rolePay
        
    })
    }
