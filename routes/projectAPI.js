var AWS = require("aws-sdk");

let awsConfig = {
    "aws_access_key_id" : "ASIAVQ3FWTFCPNZGMREF",
"aws_secret_access_key" :"sf4d8Tjr6n5l/1ffpln5b8eCb8gS5gfuwMgVKte2",
"region": 'us-east-1'
};
//var credentials = new AWS.SharedIniFileCredentials({ profile: 'default' });

AWS.config.update( awsConfig );
//AWS.config.credentials = credentials;
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



module.exports = {
    fetchOneByKey:fetchOneByKey,
    litrosPorDia: litrosPorDia,
    infoFarm:infoFarm
}
/*
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-shared.html
de MIGUEL ALEJANDRO VILLA GUERRERO a todos:    8:58 AM
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
de MIGUEL ALEJANDRO VILLA GUERRERO a todos:    8:58 AM
https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/*/