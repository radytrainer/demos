
const axios = require('axios');
const chalk = require('chalk');

const url = "https://random-words-api.vercel.app/word";
axios
.get(url)
.then( response => console.log(chalk.bgRed(response.data[0].word)));

// --------------------------------------------------
// PART 2 : PUSH.. BUT NOT ALL
// --------------------------------------------------

// 1- Create a new GITHUB repository and close it

// 2- Put the previous code on it

// 3- Create a file  .gitignore file:
//			It should contain the line: 
//			/node_modules 

// 4- Commit and push
//		Check the /node_modules folder is NOT on gitHub

// 5- Clone your project again (new folder)

// 6- INstall the NPM dependancies

// 7 Run it : it should work and you should have the /node_modules created
