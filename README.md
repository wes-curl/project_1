# project_1


[![Node.js CI](https://github.com/wes-curl/project_1/actions/workflows/node.js.yml/badge.svg?branch=dev-main)](https://github.com/wes-curl/project_1/actions/workflows/node.js.yml)

CSC 307 project 1 repository. A professor ratings website.
This website allow users to rate professors at Cal Poly.  The user of the website may either search for a proffesor by various parameters or add a new professor.  The database of professors include various information about the professors.  The searchable parameters based on this stored information are:
- Class
- Professor name
- Department

The professor ratings are based on a 5 star rating system.  A user enters a score from 1 to 5 (1 being poor, 5 being great) based on how good of a job the professor did.  The score is then added to the database and an average rating based on all on all previous ratings is displayed.  There is also a professor avatar feature.  Pictures of professesors that have online avatars on the global avatar service Gravatar are displayed as profile pictures.

UI Wireframe: https://www.figma.com/file/pZQ0XXtjFgpyR4HkkmXX4c/Poly-Rating?node-id=0%3A1

Diagrams: Please find both diagrams in the repo.

For this repo, we've decided to use prettier. 
Installation instructions: 
https://prettier.io/docs/en/install.html

We're also going to be creating feature branches off of dev-main. 
The branch name will be as follows:
    [Issue number]-[Issue name]
    
Development Environment: In order to properly develop on a new workstation, the development environment should match up
                         with our previous developers. Run "npm install" to install the dependencies that are present. Do this
                         once in the frontend folder, and then again in the backend folder, as they have separate package.json files.
                         After installing the dependencies, you can run the backend by entering "npm run dev" while in the backend folder. 
                         To run the frontend, enter "npm start" while in the frontend folder.

For example, if the issue name is `Update Readme` and the issue number is 1. The branch name will be `1-Update Readme`.

//another test
