/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import AuthController from 'App/Controllers/Http/AuthController'
import { LoginRequest, RegisterRequest } from 'App/Types'
import { setSuccessResponse, setErrorResponse, sendResponse } from 'App/Utils/util'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.post('register', async ({ request, response }) => {
  let resp
  try {
    const userData: RegisterRequest | Record<string, any> = request.body()
    const result = await new AuthController().registerUser(userData)
    resp = setSuccessResponse(200, 'User Registered Successfully.', result)
  } catch (error) {
    resp = setErrorResponse(500, 'Internal Server Error', error)
  }

  return sendResponse(response, resp)
})

Route.post('login', async ({ request, response }) => {
  let resp;
  try {
    const loginData: LoginRequest | Record<string, any> = request.body()
    const result = await new AuthController().login(loginData)
    resp = setSuccessResponse(200, 'Success.', result)
  } catch (error) {
    resp = setErrorResponse(500, 'Invalid Credentials', error)
  }

  return sendResponse(response, resp);
})

// Route.resource('products', 'ProductsController').apiOnly()
// Route.resource('products/category', 'ProductCategoriesController').apiOnly()
// Route.resource('products/category/sub', 'ProductSubCategoriesController').apiOnly()
