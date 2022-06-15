# minimart-appserver

Minimart AppServer

Objectives Attempted
1. CRUD for product with JSON response
2. Input validation with swagger
3. Logging with pino
4. Database wrapper ODM with mongoose

## Quick Start

Ensure Node and npm is installed 

1. Install ts-node
```npm install -g ts-node```

2. Install dependencies
```npm install```

3. Setup database
The app requires mongodb. You may install it locally or run a docker image
https://www.mongodb.com/
or
https://hub.docker.com/_/mongo

4. Setup environment variables
Create a file .env in the root directory and paste these contents (easiest way)
```
APP_ID=minimart-appserver
PORT=3001
LOG_LEVEL=debug
REQUEST_LIMIT=100kb
SESSION_SECRET=mySecret
MONGO_HOST=127.0.0.1
MONGO_PORT=27017
MONGO_DB=minimartDB

#Swagger
SWAGGER_API_SPEC=/spec
```
You may change the values to suit your preferences

5. Run the appserver in dev mode
``` npm run dev ```

6. To run in production mode
```
npm run compile
npm start
```


Boilerplate code was generated with generator-express-no-stress-typescript-mongoose
https://www.npmjs.com/package/generator-express-no-stress-typescript-mongoose
