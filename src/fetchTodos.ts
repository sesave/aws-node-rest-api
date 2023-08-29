const fetchTodos = async (event: any) => {
  const dynamo = new AWS.DynamoDB.DocumentClient();
  let todos;

  try {
    const results = await dynamo.scan({ TableName: "TodoTable" }).promise();
    todos = results.Items;
  } catch (error) {
    console.error(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(todos),
  };
};

module.exports = {
  fetchTodos,
};
