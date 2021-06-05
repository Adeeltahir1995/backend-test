import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import ProductCategory from './ProductCategory';

export default class ProductSubCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @belongsTo(() => ProductCategory)
  public product_category_id: BelongsTo<typeof ProductCategory>

  @column()
  public status: boolean;
}
