# fav_movie_list_project

---

Created by: JC, Luis, Eduardo.

https://github.com/sanjothebay/fav_movie_list_project

https://sanjothebay.github.io/fav_movie_list_project/

https://dry-caverns-58581.herokuapp.com/

![image](https://user-images.githubusercontent.com/67298961/113962438-4d9b5180-97ed-11eb-9da5-b93f92d65ce0.png)

![image](https://user-images.githubusercontent.com/67298961/113967339-66f4cb80-97f6-11eb-9566-cf0d4f5cc84e.png)

# Table of contents

---

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
2. [App Setup](#App_Setup)
3. [Directory structure](#Directory_structure)
3. [Collections](#Collections)
4. [Api](#Api)
5. [Submission Video](#Submission_Video)


## Description :bulb:

---

General information about this project.

This application can be used to keep track of your favorite movies and if you watched the movie. 
The data is being saved in our database using mongoDB. 

![image](https://user-images.githubusercontent.com/67298961/113967229-314fe280-97f6-11eb-9d2b-ab619e07af58.png)


## Instruction <a name="Instruction"></a>

- Once a user is registered and authenticated. 
- Whenever the end-user searches for a movie title.  
- The application will display the trailer Of the movie that was searched.
- The end-user will then be able to choose if they would like to add the movie to their favorite movie list to watch later.
- Once the end-user picks a favorite movie.  the information will be sent to their favorite watch list. 
- It will display  the movie poster,  movie title, rating, Theater score,  and the ability for you to rate 
- When the end-user has watched the movie,  they will have the ability to delete The movie From their list. 


![image](https://user-images.githubusercontent.com/67298961/113967339-66f4cb80-97f6-11eb-9566-cf0d4f5cc84e.png)

![image](https://user-images.githubusercontent.com/67298961/113967461-a4595900-97f6-11eb-8ed5-ee8e8ac7516c.png)


## Getting Started <a name="Getting_Started"></a>

## Instructions/Getting Started

## Application Requirements

* Must use a Node and Express server

* Must use Handlebars.js as the template engine

* Must be backed by a MySQL database with a Sequelize ORM

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new library, package, or technology that we haven’t discussed

* Must have a polished front end/UI

* Must have a folder structure that meets the MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must protect API keys in Node with environment variables


#### App Setup
## App Setup <a name="App_Setup"></a>

The Application was created by running npx create-react-app


![image](https://user-images.githubusercontent.com/67298961/113967772-52650300-97f7-11eb-9bbd-5c32930a480d.png)


The application will be invoked by using the following command:

```
npm start To run the App
npm run test To run t he tests 
```

![image](https://user-images.githubusercontent.com/67298961/113967678-1b8eed00-97f7-11eb-9c4b-fe55a807e97f.png)


#### Directory structure
Directory structure <a name="Directory_structure"></a>

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── client
│      └─── public     
│             ├── favicon.ico
│             ├── index.html
│             ├── logo192.pg
│             ├── logo512.pg
│             ├── manifest.json
│             └─── robots.txt
│ 
│
│       client
│         └── scr
│              └─── components
│                    ├── Card.js
│                    ├── Col.js
│                    ├── Container.js
│                    ├── Footer.js
│                    ├── FriendsWatchList.js
│                    ├── Index.js
│                    ├── LoginScreen.js
│                    ├── LoginStyles.css
│                    ├── MovieDetails.js
│                    ├── MyWatchList.js
│                    ├── Navbar.js
│                    ├── Row.js
│                    ├── SearchForm.js
│                    └── Stats.js
│ 
│         scr
│          └── utils
│               └─── API.js
│  
│           
│         scr
│          ├── App.css
│          ├── App.js
│          ├── index.js
│          ├── manifest.json
│          └─── robots.txt
│           
│  
├── .gitgnore
│ 
├── package.json
│
│
├─── Models
│    └── index.js│
│
├─── routes
│    └── index.js
│ 
├── .env
│ 
├── .gitgnore
│ 
├── package.json
│ 
├── passportConfig.js
│
├── server.js
│
└── user.js
```


### Collections <a name="Collections"></a>
```
title
user 

```

![image](https://user-images.githubusercontent.com/67298961/113967854-86402880-97f7-11eb-85d8-7820a9bd0fef.png)


### Api <a name="Api"></a>

The Movie Database:
https://www.themoviedb.org/

![image](https://user-images.githubusercontent.com/67298961/113967962-c7d0d380-97f7-11eb-90f4-2e6ab3290c52.png)

## Submission Video <a name="Submission_Video"></a>

![caption](https://drive.google.com/file/d/11KTaXPUcHNJqPUHZ8nH5ZOjd8wbWxQQJ/view / GIF)
