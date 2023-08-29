const updateTodo = async (event: any) => {
  const { completed } = event.body;
  const { id } = event.pathParameters;
  const dynamo = new AWS.DynamoDB.DocumentClient();
  await dynamo.update({
    TableName: "TodoTable",
    Key: id,
    UpdateExpression: "set completed = :completed",
    ExpressionAttributeValues: { ":completed": completed },
    ReturnValues: "ALL_NEW",
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
        msg: `Todo ${id} updated`
    }),
  };
};

module.exports = {
  updateTodo: middy(updateTodo).use(httpJsonBodyParser()),
};
