# Watch me

### About

This application has as an objective to search for human body hashes through re-Id in video captures and return their label.

For now, an user will have to upload a video and the application will search a given person's body hash through the frames,
given that the body hash has been saved in the database. 

## Features

Currently, the app will have the following features implemented:

- **User Management**  
  - **Admin routes**
    - Create a user (`POST /users`) 
    - Find a user (`GET /users/:userId`) 
    - Find all users (`GET /users`) 
    - Delete a user (`GET /users`) 
    - Create a person's hash (`POST /people`)
    - Delete a hash (`DELETE /people/:personId`)
    
  - **User routes** 
    - List all users hashes (`GET /people`)
    - Find a hash (`GET /people/:personId`)
    - Upload video (`POST /videos`)
    - Find your videos (`GET /videos`)
    - Find a video (`GET /videos/:videoId`)
    - Delete you video (`DELETE /videos/:videoId/delete`)
    - Find people on video (`GET /people/:videoId/find`)
    - Register a user (`POST /register`)
    - Edit profile (`POST /profile`)
    - Login a user (`POST /login`)
    - Logout a user (`POST /logout`)


## Development Checklist

- [ ] Login session 
- [ ] Admin area for managing users 
- [ ] Admin area for uploading and deleting a person's body hash 
- [ ] User area for managing videos
- [ ] User area for finding a person through a video
- [ ] User profile

## Db Diagram

[Click here to check the database diagram](https://dbdiagram.io/d/Watch_me-67f409154f7afba184a9d40e)

## Figma Prototype

[Click here to check the figma screen prototype](https://www.figma.com/design/pQCtP3qGJfhZh2EJbtzGmv/Watch-me?node-id=0-1&p=f&t=MiokvOPfrbSa1Rzt-0)

## Setup

To setup the project, first install the dependencies: 
```sh
npm install
```

Then run the web app:
```sh
npm run dev
```

Then visit the [API documentation](http://localhost:3000/docs).

## Testing

Run the tests:

```sh
npm test
```

### Sprint Run 

 > **How pointscale work**
 > 
 > Once a task is set, the developer can pontuate it by the following rules: 
 >  - 1 point: Completed in 4 hours;
 >  - 2 points: Completed in 8 hours;
 >  - 3 points: Completed in 16 hours;
 >  - 4 points: Completed in half a week;
 >  - 6 points: Completed in a whole week.


## 1. Task 1: 
- [ ]  Setup the project environment :: 1 point

## 2. Task 2:
- [ ] Create navbar and footer main components :: 1 point
- [ ] Create buttons and color/stylesheet :: 1 points
- [ ] Create cards and side navbar :: 2 points

## Task 3: 
- [ ] Create layout and login page :: 1 points
- [ ] Create user and admin main pages :: 2 points

## Task 4: 
- [ ] Create CRUD forms for user and person managing :: 2 points
- [ ] Create listing pages for videos, users and people :: 3 points
- [ ] Create contexts :: 2 points

## Task 5: 
- [ ] Test front end components :: 4 points
- [ ] Connect with backend Api :: 2 points
- [ ] Create targeting screen draw to user found person on the video with label :: 3 points
