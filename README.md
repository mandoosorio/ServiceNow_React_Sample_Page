# ServiceNow-React w/ REST Implementation 

## Table of Contents 

* [Creating a React.js Project](#)
    * [```.env``` file for Deployment](#)
* [Setting Up React Project for ServiceNow](#)
* [Deploying React Project with ServiceNow](#)
* [Managing React Assets in ServiceNow](#)
    * [Naming Conventions](#)
* [Developing React.js Project](#)
    * [Components](#)
        * [Class Components](#)
        * [Function Components](#)
        * [Passing Data Between Components](#)
    * [React-Router-Dom](#)
        * [Router/Routes/Route](#)
            * [Path  Convention](#)
        * [Link](#)
            * [Link state](#)
        * [```useLocation()```](#)
    * [State](#)
        * [```useState()```](#)
        * [```useEffect()```](#)
        * [```location.state```](#)
* [REST APIs](#)
    * [Using Rest API Explorer to Help Build Requests](#)
    * [Using JS Code Provided by Rest API Explorer](#)
    * [Base64](#)
    * [Credentials](#)
    * [Role Restrictions](#)
* [Development Blockers](#)
    * [XML Get Request Infinite Loop (Workaround)](#)
    * [Running Build and Deploying App to Test Rest Calls](#)
    * [Asset Naming](#)
    * [Component Paths/Endpoints](#)
    * [Session Validation/Access](#)

## Creating a React.js Project
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## Setting up React Project for ServiceNow
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## Deploying React Project with ServiceNow
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## Managing React Assets in ServiceNow
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## Developing React.js Project
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## APIs
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.

## Blockers
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.
When this code runs, it will check whether you are in development, or if the build for this project has been run and will use the appropriate credentials—in development, the app will use the .env file, in production it will use the session token stored in the window through the glide script in the index.html file (which will be executable once this index.html code gets pasted into a UI Page.