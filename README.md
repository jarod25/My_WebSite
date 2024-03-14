<div align=center>

![gif](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXl5amtnMXpjbXI3eWdqNTN5NDgzYTk2NG1vZ2xjNXV2eHFvenh1OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZC0SnImQdzWFjIVEei/giphy.gif)

<h1 style="text-align:center">
    ◂ My_WebSite ▸
</h1>
<h6 style="text-align:center">Jarod Kohler's showcase website.</h6>

<a href="https://lbesson.mit-license.org/">
    <img src="https://img.shields.io/website?down_color=red&down_message=down&up_color=247d29&up_message=up&url=https://jarod-kohler.fr" alt="Up or down website state">
</a>
<img src="https://img.shields.io/badge/made%20with-❤-b31f15" alt="Made with love">
<br/>
<br/>
<br/>
</div>


## Table of shortcuts


- [Key features](#key-features)
- [Project organization](#project-organization)
- [Frameworks and tools](#frameworks-and-tools)
- [How to install](#how-to-install)
- [Project start-up and shutdown](#project-start-up-and-shutdown)
- [Credits](#credits)
- [Support](#support)


---


## Key features


- Introduction to Jarod Kohler's profile.
- School and work projects developped.
- Resume to download.
- Contact.


## Project organization


    ├── README.md                   <- Documentation to use the project
    ├── docker-compose.yml          <- Script defining and running the 3 project's containers
    ├── dev                         <- Database development
        └── mariadb_init            <- Contains the initialization file
    ├── backend                     <- NodeJS application
        ├── src                     <- Routes and database connection
        ├── Dockerfile              <- Script assembling and deploying the backend container
        ├── nodemon.json            <- Automatic restart of the application
        ├── package.json
        ├── package-lock.json
        └── tsconfig.json
    └── frontend                    <- React application
        ├── public                  <- Manifest, favicon, ...
        ├── src                     <- Client interface sources
        ├── Dockerfile              <- Script assembling and deploying the backend container
        ├── package.json
        └── package-lock.json


## Frameworks and tools


### Backend
- NodeJS / npm
- TypeScript
- Docker
- nodemon

### Frontend
- ReactJS 
- NodeJS / npm
- HTML / CSS

### Database
- MariaDB


## How to install


### Environment

Make sure to create a new file at the root of the project called `.env`. Then write in the file these following lines:
```dosini
ROOT_PWD=                       # Complete with a strong password
ADMIN_USER=                     # Complete with your username
ADMIN_PWD=                      # Complete with your password
DB_NAME=kohler_db_by_eino       # The name of the database, it should not be changed
```
This data will allow you to connect the database and the back-end together.

### Docker

If you don't have `Docker` on your computer, you can either download it on <a href="https://www.docker.com/" target="_blank">Docker</a> official website or follow the instructions they provide. Once you have it, launch the software.

Check out if `Docker` is ready, then go at the root of the project with your terminal.



## Project start-up and shutdown


### Production environment

To deploy the project, make sure to have your .env file complete and Docker is started. Then open a terminal at the root of the repository and run:
```bash
$> docker-compose up -d
```

Docker will start your 3 containers (backend, frontend and database) and use the Dockerfile scripts to install, build and deploy your project.

In the case you need to stop everything, run this command at the root of the repository:

```bash
$> docker-compose down
```

You can also use your `Docker Desktop` to delete permanently the project's volumes and their content.

### Development environment

- At the root of the backend app folder, run:
```bash
$> npm i
$> npx nodemon              # Optional, refresh the build
$> npm run "start:dev"      # Replace it with "start:prod" for the production environment
```

- At the root of the frontend app folder, run:
```bash
$> npm i
$> npm run build            # Optional for dev environment
$> npm start                # Launches the app on you browser
$> npm test                 # Optional
```

## Credits


- [Eino](https://github.com/devillh) develops the front-end.
- [Jarod Kohler](https://github.com/jarod25) develops the back-end.


## Support


You can give this repo a star or watch it. If you want to help me to improve with this project, feel free to create an issue!