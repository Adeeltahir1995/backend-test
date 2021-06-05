import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory'

export default class ProductSubCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public product_category_id: number

  @belongsTo(() => ProductCategory, { foreignKey: 'product_category_id' })
  public product_category: BelongsTo<typeof ProductCategory>

  @column()
  public status: boolean
}
