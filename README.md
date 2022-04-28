# EXPRESS JS API - UNIVERSIDAD DEL NORTE 

Api example using Nodejs with ExpressJs

## TEAM PLAYERS
- RONALD 
- DANIEL
- MAURICIO

## INITIAL SETUP
1. Clone the repository
2. Execute ```npm install```
3. Start the app with ```npm start```
4. Import the thunder-collection_Tasks.json file using the Thunder client 
5. Enjoy it!

## ENDPOINTS
The task 1651106186363 is created by default
1. Get all task:GET to http://localhost:3000/api/v1/task/
2. Get task by id:GET to http://localhost:3000/api/v1/task/1651106186363
3. Create task: POST http://localhost:3000/api/v1/task
Body example:
```json
{
    "description": "Taller 1",
    "author": "Mauricio"
}
```
4. Update task: UPDATE http://localhost:3000/api/v1/task/1651106186363
Query param with the ID in the URL and body:
```json
{
    "description": "Homework update",
    "author": "Mauricio Update"
}
```
5. Delete task: DELETE http://localhost:3000/api/v1/task/1651106186363
Query param with the ID in the URL
