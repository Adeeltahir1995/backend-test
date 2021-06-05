import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').notNullable().references('id').inTable('users')
      table.integer('product_category_id').notNullable().references('id').inTable('product_categories')
      table.integer('product_sub_category_id').notNullable().references('id').inTable('product_sub_categories')
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.integer('price').notNullable()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
