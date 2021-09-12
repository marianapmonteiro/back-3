const { createdAt, updatedAt } = require("../seeds/helpers")


exports.up = function(knex) {
    return knex.schema.createTable("user_products", function(table){
          table.increments("id").primary()
          createdAt(knex, table)
          updatedAt(knex, table)
          table.timestamp("deleted_at")
          table.integer("user_id").unsigned().references("id").inTable("users")
          table.integer("product_id").unsigned().references("id").inTable("products")

      })
      .createTable("billings", function(table){
        table.increments("id").primary()
        createdAt(knex, table)
        updatedAt(knex, table)
        table.timestamp("deleted_at")
        table.integer("amount")
        table.integer("user_id").unsigned().references("id").inTable("users")
        table.integer("user_products_id").unsigned().references("id").inTable("user_products")
        

    })
    }

exports.down = function(knex) {
    return knex.schema.table("user_products", function(table) {
        table.dropForeign("product_id")
        table.dropForeign("user_id")
    })
    .table("billings", function (table) {
        table.dropForeign("user_id")
        table.dropForeign("user_products_id")
    }).dropTable("user_products")
    .dropTable("billings")
    
};