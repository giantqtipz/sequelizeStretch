const db = require('./dbConfig');
const Sequelize = require('sequelize');
const { STRING, BOOLEAN, INTEGER, ENUM } = require('sequelize');

//YOUR CODE GOES HERE
const Recipe = db.define('recipe', {
    name: {
        type: STRING,
        defaultValue: 'cereal',
        allowNull: false
    },
    cookTime: {
        type: INTEGER,
        min: 1,
        max: 60
    },
    vegan: {
        type: BOOLEAN
    },
    food: {
        type: ENUM
    }
})


//--------------------
module.exports = Recipe;
