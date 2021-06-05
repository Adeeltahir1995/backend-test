import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import AuthController from 'App/Controllers/Http/AuthController'
import { sendResponse } from 'App/Utils/util'

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.post('register', async ({ request, response }) => {
  const result = await new AuthController().registerUser(request.body())
  return sendResponse(response, result)
})

Route.post('login', async ({ request, response }) => {
  const result = await new AuthController().login(request.body())
  return sendResponse(response, result)
})

Route.resource('products/category/subcategory', 'ProductSubCategoriesController').apiOnly()
Route.resource('products/category', 'ProductCategoriesController').apiOnly()
Route.resource('products', 'ProductsController').apiOnly()
