const AWS = require('aws-sdk');
require('dotenv').config();

const SESConfig = {
  apiVersion: "2012-08-10",
    accessKeyId: process.env.AWS_ACCESS_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "us-east-1",
    sessionToken: process.env.AWS_SESSION_TOKEN,

}

AWS.config.update(SESConfig);

var s3 = new AWS.S3();

let getfarmsFromS3 = async function getObject () {
    try {
      const params = {
        Bucket: "s3proyecto", // your bucket name,
        Key: "farms.json" // path to the object you're looking for
      }
  
      const data = await s3.getObject(params).promise();
  
      return data.Body.toString('utf-8');
    } catch (e) {
      throw new Error(`Could not retrieve file from S3: ${e.message}`)
    }
  }


module.exports = {
  getfarmsFromS3: getfarmsFromS3
}