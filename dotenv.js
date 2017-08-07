const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');
const env = dotenvExpand(dotenv.config()).parsed;

module.exports = () => {
  return {
    DYNAMODB_TABLE: env.DYNAMODB_TABLE,
    AUTH0_LABNOTES_CLIENT_ID: env.AUTH0_LABNOTES_CLIENT_ID,
    AUTH0_LABNOTES_CLIENT_SECRET: env.AUTH0_LABNOTES_CLIENT_SECRET,
    s3Bucket: 'labnotes.infrontlabs.com'
  }
}