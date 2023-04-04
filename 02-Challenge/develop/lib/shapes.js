const { default: inquirer } = require("inquirer");
const fetch = require('node-fetch');
const CLI = require('./lib/cli.js');
const svg = require('svg.js')

class shape {
    constructor() {

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'imageColor',
                    message: 'What color would you like the image to be?',
                },
                {
                    type: 'input',
                    name: 'imageText',
                    message: 'Enter up to 3 characters to put on the image.',
                },
                {
                    type: 'list',
                    name: 'shapeChoice',
                    message: 'What shape would you like?',
                    choices: ['triangle', 'circle', 'square']
                },
            ])
    }
}

class triangle extends shape{

}

class circle extends shape{

}

class square extends shape{

}

module.exports = shape;
module.exports = triangle;
module.exports = circle;
module.exports = square;