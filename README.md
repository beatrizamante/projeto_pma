# Watch me

### About

This application has as an objective to upload a video and search a given person's body hash through the frames. 


## Features

Currently, the app has the following features implemented:

- **User Management**  
  - **Admin routes**
    - Create a user (`POST /users`) 
    - Find a user (`GET /users/:userId`) 
    - Find all users (`GET /users`) 
    - Delete a user (`GET /users`) 
    
  - **User routes** 
    - Create a person's hash (`POST /people`)
    - List all users hashes (`GET /people`)
    - Find a hash (`GET /people/:personId`)
    - Delete a hash (`DELETE /people/:personId`)
    - Upload video (`POST /videos`)
    - Find your videos (`GET /videos`)
    - Find a video (`GET /videos/:videoId`)
    - Delete you video (`DELETE /videos/:videoId/delete`)
    - Find people on video (`GET /people/:videoId/find`)
    - Login a user (`POST /login`)
    - Logout a user (`POST /logout`)


## Development

The project uses [tsx](https://tsx.is/) to run TypeScript. All the necessary
npm scripts are in package.json, but feel free to add any other if needed.
To interact with Knex, use `npm run knex` instead of using `npx knex` because
of the usage of the `tsx` library.

### Db Diagram

[Click here to check the diagram of the database(https://dbdiagram.io/d/Watch_me-67f409154f7afba184a9d40e)]

### Figma Prototype

[Click here to check the figma screen prototype(https://www.figma.com/design/pQCtP3qGJfhZh2EJbtzGmv/Watch-me?node-id=0-1&p=f&t=MiokvOPfrbSa1Rzt-0)]

### Setup

To setup the project, first run the Docker container:
```sh
docker compose up
```

Then, install the dependencies:
```sh
npm install
```

Then, create the development database, migrate it and seed it:
```sh
npm run db:create:dev && npm run db:migrate:dev && npm run db:seed:dev
```

Then run the web app:
```sh
npm run dev
```

Then visit the [API documentation](http://localhost:3000/docs).

### Testing

First, setup the test database:

```sh
npm run db:create:test && npm run db:migrate:test
```

Then run the tests:

```sh
npm test
```