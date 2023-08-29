# Serverless CRUD API with Node.js

This repository contains a serverless CRUD (Create, Read, Update) API implemented using Node.js. The API is designed to provide a lightweight and scalable solution for managing data resources without the need to manage server infrastructure.

## Getting Started
- Clone this repository
- Install dependencies: npm install
- Configure your AWS credentials: serverless config credentials --provider aws --key YOUR_KEY --secret YOUR_SECRET
- Customize the API configuration in serverless.yml to fit your requirements.
- Deploy the API: sls deploy --verbose
- Access and test your CRUD API endpoints.
- Configure your dynamo arn on the yml.

### Prerequisites
- Yarn installed locally
- AWS account for deployment (update credentials in configuration)
- Serverless Framework installed globally (npm install -g serverless)

## Features
- Serverless Architecture: The API is built using serverless technologies, leveraging the power of cloud computing without the overhead of managing servers.

- CRUD Operations: The API supports standard CRUD operations, allowing you to easily manage your data resources.

- Lambda Functions: AWS Lambda functions are utilized to handle different endpoints, ensuring efficient execution and cost-effectiveness.

- API Gateway: Amazon API Gateway is integrated to manage API endpoints, security, rate limiting, and more.

- Data Storage: Data is stored in a suitable serverless database or storage service, providing persistence for your resources.



### API Endpoints
POST /: Create a new todo item
GET /todos: Retrieve the todo items
GET /todo/{id}: Retrieve an todo item by ID
PUT /todo/{id}: Update an existing todo item

### Techs Used:
- AWS SDK
- Serverless.com
- Node.js / Typescript
- Middy
- UUID


