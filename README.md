# auth-api
Lab08

bearerAuth
June 23, 2021

Description
A RESTful api that supports basic authentication and bearer token authentication

https://cs-bearer-auth.herokuapp.com/

Start up
Clone the repo from github, and install the necessary dependencies.

npm i
npm start
UML
Basic authentication process

Routes
/signup
POST
Status code: 201
Inputs:
username: STRING, required = true
password: STRING, required = true
JSON response:
Returns a newly created user record
Token: STRING
username: STRING
password: STRING
createdAt: STRING
updatedAt: STRING
{
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluLWJhc2ljIiwiaWF0IjoxNjI0NDc1ODE4fQ.YuADsDdEwndhzw1xD2slDZN87LiIsLzZc5xdacKslrM",
    "id": 1,
    "username": "admin-basic",
    "password": "$2b$10$E4OBsMw1nBjb3iNchmox4OG5AZlVLft1BpmPovo9VJBwKpspQMwK.",
    "updatedAt": "2021-06-23T19:16:58.709Z",
    "createdAt": "2021-06-23T19:16:58.709Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluLWJhc2ljIiwiaWF0IjoxNjI0NDc1ODE4fQ.YuADsDdEwndhzw1xD2slDZN87LiIsLzZc5xdacKslrM"
}
/signin
POST
Status code: 200
Inputs:
authorization header
username and password encoded in base64
JSON response:
Returns a previously created user record
Token: STRING
username: STRING
password: STRING
createdAt: STRING
updatedAt: STRING
{
  "user": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluLWJhc2ljIiwiaWF0IjoxNjI0NDc1ODUyfQ.Az1VkhEQLmS2-IRoaE7MDKIOpFKWoY-ITRK6_SP9Mqk",
    "id": 1,
    "username": "admin-basic",
    "password": "$2b$10$E4OBsMw1nBjb3iNchmox4OG5AZlVLft1BpmPovo9VJBwKpspQMwK.",
    "createdAt": "2021-06-23T19:16:58.709Z",
    "updatedAt": "2021-06-23T19:16:58.709Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluLWJhc2ljIiwiaWF0IjoxNjI0NDc1ODUyfQ.Az1VkhEQLmS2-IRoaE7MDKIOpFKWoY-ITRK6_SP9Mqk"
}
Contributors
Tim Egorov, Tek Jones, Cullen Sharp. 