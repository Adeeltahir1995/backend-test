import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('password').notNullable()
      table.string('remember_me_token').defaultTo(null)
      table.enum('type', ['admin', 'vendor'], {useNative: true, enumName: 'users_type_enum'})
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('gender').notNullable()
      table.string('contact_number').notNullable()
      table.string('address').defaultTo(null)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
