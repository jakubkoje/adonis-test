import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Movies extends BaseSchema {
  protected tableName = 'movies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name').notNullable()
      table.string('author').notNullable()
      table.integer('release_year').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
