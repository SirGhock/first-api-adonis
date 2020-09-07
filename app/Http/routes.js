'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const Env = use("Env");

const API_VERSION = Env.get("API_VERSION");


Route.group('version2', function () {
  Route.get('/', function* (request, response) {
    response.send({greeting: 'My first Api with Adonis'})
  })
}).prefix(`${API_VERSION}`)

Route.group('version1', function () {
  Route.get(':id', function* (request, response) {
    const id = request.param('id');
    response.send({ greeting: id })
  })
}).prefix(`${API_VERSION}/user`)

// Route.get('/user/:id?', function * (request, response) {
//   const id = request.param('id', 'vazio')
//   response.send({user_id: id})
// })