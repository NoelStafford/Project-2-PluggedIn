const mysql = require('mysql2');
const inquirer = require('inquirer');
const { response } = require('express');
const deleteProfile = document.getElementById('deleteProfile')
const addProfile = document.getElementById('addProfile')
const updateProfile = document.getElementById('updateProfile')
const viewProfile = document.getElementById('viewProfile')
const searchBar = document.getElementById('searchBar')
// Connect to database
// const db = mysql.createConnection(
    // {
//         host: 'localhost',
//         user: 'root',
//         password: 'rootroot',
//         database: 'jobsearcher_db'
//     },
//     console.log(`Connected to the practice_db database.`)
// );

// const questions = [{
//     type: 'list',
//     name: 'startup',
//     message: 'What do you want to do?',
//     choices: ["Add a profile", "Delete a profile", "Update a profile", "View profile"],
//     validate: nameInput => {
//         if (nameInput) {
//             return true;
//         } else {
//             console.log('Please choose!');
//             return false;
//         }
//     }
// }]
// function add_profile() {
//     inquirer.prompt([
//         {
//             type: "input", first_name: "name",
//             type: "input", last_name: "name",
//             type: "input", skills: "name",
//             type: "input", education: "name",
//             type: "input", bio: "name"
//         }
//     ]).then(response => {
//         db.query("INSERT INTO profile", function (err, result) {
//             if (err) throw err
//             console.table(result)
//             init()
//         })
//     })
// }
// function view_profile() {
//     db.query("SELECT * FROM profile", function (err, result) {
//         if (err) throw err
//         console.table(result)
//         init()
//     })
// }
// function update_profile() {
//     db.query("ALTER TABLE profile UPDATE COLUMN", function (err, result) {
//         if (err) throw err
//         console.table(result)
//         init()
//     })
// }
// function delete_profile() {
//     db.query("ALTER TABLE profile DROP COLUMN IF EXISTS", function (err, result) {
//         if (err) throw err
//         console.log(`successfully deleted ${result.name}'s profile`)
//         init()
//     })
// }

// addProfile.addEventListener('click', add_profile)
// updateProfile.addEventListener('click', update_profile)
// viewProfile.addEventListener('click', view_profile)
// deleteProfile.addEventListener('click', delete_profile)
// function init() {
//     inquirer
//         .prompt(questions)
//         .then(responses => {
//             console.log(responses)
//             if (responses.startup === "View profile") {
//                 view_profile()
//             }
//             if (responses.startup === "Delete a profile") {
//                 delete_profile()
//             }
//             if (responses.startup === "Update a profile") {
//                 update_profile()
//             }
//             if (responses.startup === "Add a profile") {
//                 add_profile()
//             }
//         });
// }

init(); 


