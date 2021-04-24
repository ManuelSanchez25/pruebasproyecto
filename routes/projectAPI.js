const AWS = require('aws-sdk');

//var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });
const config = {
    "apiVersion": "2012-08-10",

    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "us-east-1",

}



// Replace ./data.json with your JSON feed

//AWS.config.update({region :"us-east-1"});
AWS.config.update(config);


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