const data = require('../data/variables.json');

let temp =[];
let variables = [];
for (let i = 0; i < data.length; i ++){
    variables.push(data[i])
}
for (let j=0; j<data.length; j++){
    temp[j] =variables[j].temperatura
}
console.log(variables)
console.log(temp)

module.exports = {
    variables: variables,
    temp: temp
}