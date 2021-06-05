import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductSubCategory from 'App/Models/ProductSubCategory'
import { CreateProductSubCategory, UpdateProductSubCategory } from 'App/Types'

export default class ProductSubCategoriesController {
  public async index({}: HttpContextContract) {
    return await ProductSubCategory.query().preload('product_category')
  }

  public async store({ request }: HttpContextContract) {
    const productCategoryData: Record<string, CreateProductSubCategory> = request.body()
    return await ProductSubCategory.create(productCategoryData)
  }

  public async show({ params }: HttpContextContract) {
    return await ProductSubCategory.query().where('id', params.id).preload('product_category')
  }

  public async update({ params, request }: HttpContextContract) {
    const updateData: Record<string, UpdateProductSubCategory> = request.body()
    return await ProductSubCategory.updateOrCreate({ id: params.id }, updateData)
  }

  public async destroy({ params }: HttpContextContract) {
    const subCategory = await ProductSubCategory.findOrFail(params.id)
    return await subCategory.delete()
  }
}
