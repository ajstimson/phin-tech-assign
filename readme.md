# To-Do App

## Installation

To run this application, clone this repository and run the following commands:

-   cd /client && npm install
-   npm start
-   cd /server && npm install
-   Make sure you have nodemon installed globally
-   npm start (from the server directory)

I will provide the .env and key.json files separately.

# Overview:

# To-Do App

## Installation

To run this application, clone this repository and run the following commands:

-   cd /client && npm install
-   npm start
-   cd /server && npm install
-   Make sure you have nodemon installed globally
-   npm start (from the server directory)

I will provide the .env and key.json files separately.

# Overview:

The front-end is built using React, and uses the following dependencies:

-   Chakra UI for quick and reliable component functionality, styling and layout.
-   Axios for making API calls to the back-end.

The application allows users to create, read, update, and delete to-dos as well as filter the to-dos by status and hide completed to-dos.
It also uses a modal window for creating and editing to-dos.

The back-end is built using Node.js and Express.js, and uses the following dependencies:

-   Firebase Admin for interacting with the Firestore.
-   Firebase Firestore for storing the to-dos.
-   Dotenv for managing environment variables.
-   Cors for handling CORS (Cross-Origin Resource Sharing) requests.
-   Body Parser for parsing the request body.

The back-end exposes RESTful API endpoints for CRUD operations. These endpoints include:

-   POST /api/todo to create a new to-do
-   GET /api/todo to retrieve all to-dos
-   GET /api/todo/:id to retrieve a specific to-do
-   PUT /api/todo/:id to update a specific to-do
-   DELETE /api/todo/:id to delete a specific to-do

The back-end uses Firebase Firestore's API for persistent storage. The config module is responsible for storing and managing the environment variables such as the PORT, Firebase and other configurations.

# Future improvements to this application would be:

-   Refactoring the code to use TypeScript (I had trouble with Chakra UI and mismatched TypeScript versions).
-   Refactoring to use context API for state management to avoid prop drilling.
-   Filtering and sorting methods for the to-dos.
-   Adding authentication to the application so that users can only see their own to-dos.

The front-end is built using React, and uses the following dependencies:

-   Chakra UI for quick and reliable component functionality, styling and layout.
-   Axios for making API calls to the back-end.

The application allows users to create, read, update, and delete to-dos as well as filter the to-dos by status and hide completed to-dos.
It also uses a modal window for creating and editing to-dos.

The back-end is built using Node.js and Express.js, and uses the following dependencies:

-   Firebase Admin for interacting with the Firestore.
-   Firebase Firestore for storing the to-dos.
-   Dotenv for managing environment variables.
-   Cors for handling CORS (Cross-Origin Resource Sharing) requests.
-   Body Parser for parsing the request body.

The back-end exposes RESTful API endpoints for CRUD operations. These endpoints include:

-   POST /api/todo to create a new to-do
-   GET /api/todo to retrieve all to-dos
-   GET /api/todo/:id to retrieve a specific to-do
-   PUT /api/todo/:id to update a specific to-do
-   DELETE /api/todo/:id to delete a specific to-do

The back-end uses Firebase Firestore's API for persistent storage. The config module is responsible for storing and managing the environment variables such as the PORT, Firebase and other configurations.

# Future improvements to this application would be:

-   Refactoring the code to use TypeScript (I had trouble with Chakra UI and mismatched TypeScript versions).
-   Refactoring to use context API for state management to avoid prop drilling.
-   Filtering and sorting methods for the to-dos.
-   Adding authentication to the application so that users can only see their own to-dos.
