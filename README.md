# CRUD Backend Server

This repository contains the backend code for a RESTful API basic crud options using Express.js and MongoDB. 
This API allows you to perform CRUD operations (Create, Read, Update, Delete) providing a simple way to interact with content.

Technology Used- ExpressJs, MongoDB, RestAPI

## Features
```
- Create new todo items with titles, description, and other details.
- Retrieve a list of all todoitems or specific todo details.
- Update todo item information.
- Delete todo item from the database.
```
## Prerequisites

- Node.js and npm should be installed on your machine
- MongoDB should be installed and running
- Mongoose should be installed and running 
- Express.js should be installed and running 
- Nodemon should be installed and runnig 

## Installation

1. Clone the repository:

   ```bash
   https://github.com/robertostepic/NodeExpressCrudRestAPI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CRUDNOAUTH
   ```

3. Install dependencies:

   ```bash
   npm install express dotenv mongoose nodemon
   ```

## Configuration

1. Create a `.env` file and set the following environment variables:

   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_uri
   ```

## Usage

1. Start the server:

   ```bash
   npm run server
   nodemon index.js
   ```

2. The API will be accessible at `http://localhost:5000`.

## API Endpoints
```
- `GET /api/all-todos`: Get a list of all posts.
- `GET /api/todo/:id`: Get details of a specific post by ID.
- `POST /api/new-todo`: Create a new  post.
- `PUT /api/update-todo/:id`: Update details of a specific  post by ID.
- `DELETE /api/delete-todo/:id`: Delete a  post by ID.
```

### 📁 _Directory view_

    .
    ├── controllers                    # Main controller folder
    │       │
    │       ├── todoController.js      # function controller - brain of routes
    │
    ├── db                             # Main database folder
    │    │
    │    ├── connect.js                # Database connection 
    │
    ├── models                         # User - Database Schema
    │      │
    │      ├── todoRoutes              # MongoDb database schema for todo
    │
    ├── routes                         # Context - Global State Manager
    │      │
    │      ├── todoRoutes              # Todo routes - create, read, update, delete
    │
    ├── .env.                          # Hidden config files for mongodb, port
    │
    │
    └── index.js                       # Startpoint of the Entire Application


## Contributing

Contributions are welcome! If you find any issues or want to enhance the project, feel free to create a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -am 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## Snapshots
![home page]()

## Authors

- [Roberto Stepic](https://github.com/robertostepic)

## 🚀 About Me

I'm an amateur developer from Croatia. 

## Support

For support, email roberto.stepic@gmail.com