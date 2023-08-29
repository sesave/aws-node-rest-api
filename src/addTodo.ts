const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const middy = require("@middy/core");
const httpJsonBodyParser = require("@middy/http-json-body-parser");

const addTodo = async (event: any) => {
  const { todo } = event.body;
  const createdAt = new Date().toISOString;
  const id = v4();
  const dynamo = new AWS.DynamoDB.DocumentClient();
  const newTodo = { id, todo, createdAt, completed: false };
  await dynamo.put({ TableName: "TodoTable", Item: newTodo }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newTodo),
  };
};

module.exports = {
  addTodo: middy(addTodo).use(httpJsonBodyParser()),
};
