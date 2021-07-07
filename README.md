# api-server

## Description

Phase 3 Requirements
Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Mongo Database, using the REST standard

Data Models
Create 2 Mongo data models using Mongoose, exported as Node Modules
Create a Collection Class that accepts a Mongoose Model into the constructor and assigns it as this.model
This class should have the following methods defined, to perform CRUD Operations
Each method should in turn call the appropriate Mongoose method for the model
create()
get() or read()
update()
delete()
For the data models, you are free to choose your own data types and describe their fields … For Example: person, animal, car, instrument, game

Routes
In your express server, create a router module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

For these examples, we’ll use ‘food`

Add a Record
CRUD Operation: Create
REST Method: POST
Path: /food
Input: JSON Object in the Request Body
Returns: The record that was added to the database.
You must generate an ID and attach it to the object
You should verify that only the fields you define get saved as a record
Get All Records
CRUD Operation: Read
REST Method: GET
Path: /food
Returns: An array of objects, each object being one entry from your database
Get One Record
CRUD Operation: Read
REST Method: GET
Path: /food/1
Returns: The object from the database, which has the id matching that which is in the path
Update A Record
CRUD Operation: Update
REST Method: PUT
Path: /food/1
Input: JSON Object in the Request Body
Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data
You should verify that only the fields you define get saved as a record
Delete A Record
CRUD Operation: Destroy
REST Method: DELETE
Path: /food/1
Returns: The record from the database as it exists after you delete it (i.e. null)
Implementation Notes
REMINDER: Your app needs a new dependency today: mongoose

npm i mongoose
npm i @code-fellows/supergoose (needed for testing)
Remember to start your mongo server: mongod --dbpath=/Users/path/to/data/db

Create an express server with the following proposed structure

## Links

Heroku Link: https://api-server-yazan.herokuapp.com/

Github Actions: https://github.com/yazantafesh/api-server/actions

Pull Request: https://github.com/yazantafesh/api-server/pull/3

## UML

![UML](./UML-lab4.png)