const inquirer = require('inquirer');
const fetch = require('node-fetch');
const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();
