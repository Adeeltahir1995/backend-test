import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import ProductCategory from './ProductCategory'
import ProductSubCategory from './ProductSubCategory'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User)
  public user_id: HasOne<typeof User>

  @hasOne(() => ProductCategory)
  public product_category_id: HasOne<typeof ProductCategory>

  @hasOne(() => ProductSubCategory)
  public product_sub_category_id: HasOne<typeof ProductSubCategory>

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
