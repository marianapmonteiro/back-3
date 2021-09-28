const { createdAt, updatedAt, foreign } = require("../helpers");

exports.up = function (knex) {
  return knex.schema
    .createTable("products", function (table) {
      table.increments("id").primary();

      createdAt(knex, table);
      updatedAt(knex, table);
      table.timestamp("deleted_at");
      table.string("title", 100).notNullable();
      table.string("description", 45).notNullable();
      table.string("category", 255).notNullable();
      table.specificType("price", "tinyint");
    })
    .createTable("product_images", function (table) {
      table.increments("id").primary();
      table.string("url", 255);
      foreign(table, "product_id", "products")
    })
    .createTable("categories", function (table) {
      table.increments("id").primary();
      table.string("category", 15);
    })
    .createTable("product_category", function (table) {
        foreign(table, "product_id", "products")
        foreign(table, "category_id", "categories")
    });
};

exports.down = function (knex) {
  // return knex.schema.table("products", function(table) {
  //     table.dropForeign("product_id")
  // })
  return knex.schema.table
    .table("product_category", function (table) {
      table.dropForeign("product_id");
      table.dropForeign("categories_id");
    })
    .table("product_images", function (table) {
      table.dropForeign("product_id");
    })
    .dropTable("product_category")
    .dropTable("categories")
    .dropTable("products");
};
