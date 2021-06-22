# Basic POS System API

List of Basic Commands
 * npm init # This will trigger the initialization 
 * npm init --yes # This will trigger automatically populated initialization. 
 * npm install <module> # Where <module> is the name of the module you want to install 
 * npm i <module> # Where <module> is the name of the module you want to install - using the i alias for installation 
 * npm install <module> --save # Install Modules and Save Them to Your package.json as a Dependency
 * npm install <module> --save-dev # Install Modules and Save Them to Your package.json as a Developer Dependency
 * npm install <module> --global # Where <module> is the name of the module you want to install globally 
 * npm install <module> -g # Where <module> is the name of the module you want to install globally, using the -g alias 


 * npm init -y
 * npm i express mysql body-parser --save
 * npm i nodemon --save-dev     <=OR YOU CAN USE BELOW COMMAND
 * npm i -D nodemon
 * npm i dotenv
 
 
 NOTE 01: As of npm 5, the --save option is no longer necessary. If you do "npm install my-package", it will add my-package as a dependency in your package.json file. 
 
 NOTE 02: devDependencies should contain packages which are used during development or which are used to build your bundle, for example, mocha, jscs, grunt-contrib-watch, gulp-jade and etc. These packages are neseccery only while you are developing your project, also ESlint is used to check everything during building your bundle.
 
                                    

                                    API Folder Structure
src
│   app.js          
└───api             
└───config          
└───jobs            
└───loaders         
└───models          
└───services        
└───subscribers     
└───types      

                                    
* app.js      => is the app’s entry point.
* api         => has the controllers for the endpoints.
* config      => has the environment variables and configuration related stuff.
* jobs        => have scheduled jobs.
* loaders     => have the code that runs when the app starts.
* models      => have the database models.
* services    => has business logic.
* subscribers => have the event handlers for queues, etc.
* types       => are type definitions for TypeScript projects.
 
 
