# To-Do App

## Installation

To run this application, clone this repository and run the following commands:

1.  Navigate to the client directory and run `npm install` to install dependencies
2.  From the client directory run `npm start` to start the front-end application
3.  Navigate to the server directory and run `npm install`
4.  Place the .env file in the server directory and the admin.json file in /server/keys/ (these files are not included in the repository and will be provided separately)
5.  Please make sure to have `nodemon` installed globally by running `npm list -g nodemon`. If it's not installed run `npm install -g nodemon`
6.  From the server directory run `npm start` to start the back-end application

## Overview:

The front-end is built using React (18.2.0) and uses the following dependencies:

-   Chakra UI for quick and reliable component functionality, styling and layout.
-   Axios for making API calls to the back-end.

The application meets the assessment criteria and allows users to:

-   create, read, update, and delete to-dos
-   show or hide completed to-dos
-   uses a modal display for creating and editing to-dos.

The back-end is built using Node.js and Express.js, and uses the following dependencies:

-   Firebase Admin for interacting with the Google Firestore account.
-   Firebase Firestore for persistent storage.
-   Dotenv for securley managing environment variables.
-   Cors for handling CORS (Cross-Origin Resource Sharing) requests (e.g. communication between the client and server sides of the application).
-   Body Parser for parsing the request body.

The back-end exposes RESTful API endpoints for CRUD operations. These endpoints include:

-   POST `/api/todo` to create a new to-do
-   GET `/api/todo` to retrieve all to-dos
-   GET `/api/todo/:id` to retrieve a specific to-do
-   PUT `/api/todo/:id` to update a specific to-do
-   DELETE `/api/todo/:id` to delete a specific to-do

> The config module plays a crucial role in maintaining and organizing the environment variables, such as the PORT and Firebase configurations. In order for it to work properly, it is necessary to have both .env and admin.json files present on the local system.

## Future improvements to this application:

-   Refactor the codebase to use TypeScript and take advantage of its static typing and better code maintainability. (I was unable to quickly resolve a known issue (https://github.com/chakra-ui/chakra-ui/issues/3714) between Chakra UI, VSCode 1.74.3 and TypeScript 5.0)
-   Refactor to use React's useContext hook for simpler state management and to avoid prop drilling
-   Add filtering and sorting methods for to-do items
-   Add drag and drop sorting and persistent ordering
