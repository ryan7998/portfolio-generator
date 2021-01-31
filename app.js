const fs = require('fs');
const generatePage = require('./src/page-template.js');

var profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw Error(err);
    console.log('Portfolio complete! Check out index.html to see the output!')
});