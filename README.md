
Node-Express Authentication and CRUD API Server to Postgres Database. 

Companion Server to Decoupled React Gatsby Front End App.


## Features
-Server Side Auth token verification with Firebase Admin\
-User Sign up Flow\
-Passport JWT verification\
-Authenticated API requests\
-Returns JWT token on successful Auth \
-No ORM, SQL queries with PG library
<br/> <br/>

### Postgres Setup (Required)
https://www.postgresql.org/

1. I will assume basic Postgres knowledge and that it is already setup
2. Subsitute Postgres credentials into .env.example and rename file to .env
3. Create Tables based on commmands found in /Database/schema.sql file 
4. Set any AUTH_SECRET you wish
<br/> <br/> 

### Firebase Setup (Required)

https://firebase.google.com/

1. Simply log in to the console
2. Create New Project
3. Write Firebase Project-ID to .env file
