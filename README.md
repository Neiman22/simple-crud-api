# SIMPLE-CRUD-API

## Description

This application provides an API for managing users. It allows users to perform CRUD operations on user records stored in a database.

## Implementation Details

### Endpoints

- `GET api/users`: Retrieve all users.
- `GET api/users/{userId}`: Retrieve a user by ID.
- `POST api/users`: Create a new user record.
- `PUT api/users/{userId}`: Update an existing user record.
- `DELETE api/users/{userId}`: Delete a user record.

### Request and Response Handling

- The server handles requests and responses according to the specified status codes and messages.
- Requests to non-existing endpoints are handled with a status code 404.
- Errors on the server side are handled with a status code 500.

### User Object Properties

- `id`: Unique identifier (string, uuid) generated on the server side.
- `username`: User's name (string, required).
- `age`: User's age (number, required).
- `hobbies`: User's hobbies (array of strings or empty array, required).

### Environment Configuration

- The port on which the application is running is stored in a `.env` file.

### Running Modes

- Development Mode: Use nodemon or ts-node-dev (`npm run start:dev`).
- Production Mode: Use the bundled file (`npm run start:prod`).

### API Testing

There are tests for API covering at least 3 scenarios:

1. Create a new object with a `POST api/users` request (expect a response containing the newly created record).
2. With a GET api/user/{userId} request, we get the created record by its id.
3. Update the created record with a `PUT api/users/{userId}` request (expect a response containing an updated object with the same id).


### Horizontal Scaling

The application supports horizontal scaling with a npm script `start:multi`, which starts multiple instances using the Node.js Cluster API. Each instance listens on a different port with a load balancer that distributes requests across them using the Round-robin algorithm.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the application in the desired mode.

## Usage

1. Send requests to the specified endpoints using a tool like Postman or curl.
2. Handle responses according to the expected status codes and messages.