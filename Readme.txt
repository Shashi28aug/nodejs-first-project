Steps to start node.js project
    1. npm init (command to initialize node.js project)
    2. npm i express (package to use route object)
    3. node index.js (first file of node.js project)
    4. npm i nodemon (package to run changes in live project)
        add "start": "npx nodemon index.js" inside "scripts" of package.json
    5. npm i mongoose (packaget tp install mongodb package)
    6. npm run start

Module details
    1. index.js
        -> this module have all route object for CRUD operation
    2. userModel
        -> this module have schema for db
    3. userCotroller
        -> this module have function for each CRUD request

MongoDB install and use 
    1. brew tap mongodb/brew
    2. brew install mongodb-community@7.0
    3. brew services start mongodb-community@7.0
    4. mongosh (command to start mongodb)
    5. show collections (show all collections of db)
    6. db.collection_name.find() (show all details of collection_name)