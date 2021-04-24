var AWS = require("aws-sdk");
require('dotenv').config();

//var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
/*const config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    accessSecretKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",

}*/
var creds = new AWS.EnvironmentCredentials('AWS');
creds.accessKeyId =='ASIAVQ3FWTFCO4YWR4PF';
creds.secretAccessKey == 'I6N5oMy8PgbLY5ETw3ekToWEcUpsFQ4m3XEXi1NV'
creds.sessionToken =='IQoJb3JpZ2luX2VjEI3//////////wEaCXVzLXdlc3QtMiJGMEQCIGC/3MWl1CVNofVOlnhRGT7XnyLNfH37mxmP3vfKzAjWAiAWGR0u8ef/d8PRFK0TucEvGKKltloV9Gh3mb9XVXN31yqzAgj2//////////8BEAAaDDM3OTc4MTAyODE2NCIMhB8hT4N9SyjJLa97KocCCiwBEmCyaO3DNbYZmTfJbjNgwLcb2AGGFmqC6x7QY8Dmce8HDpCWea4Jfg2Ui+H/L1RbZn5I2HAMANfXx0+UkwmqHybwi6RXaAJDgRw9CzFOEMJJPKNrsBetI90XR/bGWJJ76Bncuy2VdrvvbkmSpw6SptmJWknBzlGa43rzEG3QVNb6E/oCgCAkxOJ4LYF3PO+GKpWuwurbh7RDqY98ZUUFZoanEtYzL7xNVO/ttE28dXVqNtbITt7Auv38t4+GF+n1xzpS+BXW03FVG4BS/6OpweRIWvARmPlAwYc38wT+qd94vPihAHv3lEQz0bpa8jaKM4yiaRdt5NMp6CTvUals5ehJY/Aw1oeShAY6ngEIWpYjYmfJ1fpeJzpjh0+dTrWEDLluh1NLMucnxrUpHfi3Ad6W0Skyt5y4aYxkUuiKdDLQb1chLKPa26rGXBPdfom9jPzRFfdaAH1MV5iCX5OGwEi/XIC1hMo1rugVdhEy77BFJfonCaPvdsZa1kyfVr4aVd6GfZYvxB919Jm2odayudlQ4M3BrmoKV6H6nRgHClK5yZVgQ0TrO5hZmA=='


// Replace ./data.json with your JSON feed

//AWS.config.update({region :"us-east-1"});
/AWS.config.update({region :"us-east-1"});


//AWS.config.credentials = creds;
let variabless
let docClient = new AWS.DynamoDB.DocumentClient();

let fetchOneByKey = async function  () {
    var params = {
        TableName: "sensorsData",
        Key: {
            "sensorDataId": '889eb999-1b89-4f06-bcda-9e379883e809'
        }
    };
    let request = await docClient.scan(params);
   // console.log(request)
let respone = await request.promise(); 
variabless = respone.Items
//console.log(variabless)

return variabless

};

let litrosPorDia = async function  () {
    var params = {
        TableName: "irrigations",
        
    };
    let request = await docClient.scan(params);
let respone = await request.promise();
litrosgastados = respone.Items
//console.log(variabless)

return litrosgastados
};

let infoFarm = async function  () {
    var params = {
        TableName: "farms",
        
    };
    let request = await docClient.scan(params);
let respone = await request.promise();
info = respone.Items
//console.log(variabless)

return info
};
let datossensores = async function  () {
    var params = {
        TableName: "sensorsData",

    };
    let request = await docClient.scan(params);
let respone = await request.promise();
variabless = respone.Items
//console.log(variabless)

return variabless
}
fetchOneByKey();

module.exports = {
    fetchOneByKey:fetchOneByKey,
    litrosPorDia: litrosPorDia,
    infoFarm:infoFarm,
    datossensores:datossensores
}
/*
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
de MIGUEL ALEJANDRO VILLA GUERRERO a todos:    8:58 AM
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
de MIGUEL ALEJANDRO VILLA GUERRERO a todos:    8:58 AM
https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/*/