'use strict'

const AWS = require('aws-sdk') // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient()

module.exports.handler = (event, context, callback) => {
  const timestamp = new Date().getTime()
  const data = JSON.parse(event.body)

  // validation
  if (typeof data.text !== 'string' || typeof data.checked !== 'boolean') {
    console.error('Validation Failed')
    callback(new Error('Couldn\'t update the todo item.'))
    return
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: {
      id: event.pathParameters.id
    },
    ExpressionAttributeNames: {
      '#note_text': 'text'
    },
    ExpressionAttributeValues: {
      ':text': data.text,
      ':title': data.title,
      ':updated_at': timestamp
    },
    UpdateExpression: 'SET #note_text = :text, title = :title, updated_at = :updated_at',
    ReturnValues: 'ALL_NEW'
  }

  // update the todo in the database
  dynamoDb.update(params, (error, result) => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(new Error('Couldn\'t update the note.'))
      return
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(result.Attributes)
    }
    callback(null, response)
  })
}
