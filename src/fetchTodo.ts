const fetchTodo = async (event: any) => {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;
  let todo;

  try {
    const result = await dynamo
      .get({ TableName: "TodoTable", Key: { id } })
      .promise();
    todo = result.Item;
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  fetchTodo,
};
