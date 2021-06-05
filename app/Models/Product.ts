import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ProductCategory from './ProductCategory'
import ProductSubCategory from './ProductSubCategory'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number;

  @belongsTo(() => User, { foreignKey: 'user_id' })
  public user: BelongsTo<typeof User>

  @column()
  public product_category_id: number;

  @belongsTo(() => ProductCategory, { foreignKey: 'product_category_id' })
  public product_category: BelongsTo<typeof ProductCategory>

  @column()
  public product_sub_category_id: number;

  @belongsTo(() => ProductSubCategory, { foreignKey: 'product_sub_category_id' })
  public product_sub_category: BelongsTo<typeof ProductSubCategory>

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public price: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
