import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'
import { CreateProduct, UpdateProduct } from 'App/Types'

export default class ProductSubCategoriesController {
  public async index({}: HttpContextContract) {
    return await Product.query()
      .preload('user')
      .preload('product_category')
      .preload('product_sub_category')
  }

  public async store({ request }: HttpContextContract) {
    const productCategoryData: Record<string, CreateProduct> = request.body()
    return await Product.create(productCategoryData)
  }

  public async show({ params }: HttpContextContract) {
    return await Product.query().where('id', params.id).preload('product_category')
  }

  public async update({ params, request }: HttpContextContract) {
    const updateData: Record<string, UpdateProduct> = request.body()
    return await Product.updateOrCreate({ id: params.id }, updateData)
  }

  public async destroy({ params }: HttpContextContract) {
    const subCategory = await Product.findOrFail(params.id)
    return await subCategory.delete()
  }
}
