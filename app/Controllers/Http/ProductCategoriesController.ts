import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductCategory from 'App/Models/ProductCategory'
import { CreateProductCategory, UpdateProductCategory } from 'App/Types'

export default class ProductCategoriesController {
  public async index({}: HttpContextContract) {
    return await ProductCategory.all()
  }

  public async store({ request }: HttpContextContract) {
    const productCategoryData: Record<string, CreateProductCategory> = request.body()
    return await ProductCategory.create(productCategoryData)
  }

  public async show({ params }: HttpContextContract) {
    return await ProductCategory.find(params.id)
  }

  public async update({ params, request }: HttpContextContract) {
    const updateData: Record<string, UpdateProductCategory> = request.body()
    return await ProductCategory.updateOrCreate({ id: params.id }, updateData)
  }

  public async destroy({ params }: HttpContextContract) {
    const category = await ProductCategory.findOrFail(params.id)
    return await category.delete()
  }
}
