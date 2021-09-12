const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class ProductCategory extends Model{
    static get tableName() {
        return "product_category"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["product_id", "category_id"],
            properties: {
                product_id:{type:"integer"},
                category_id:{type:"integer"},

            },
        }
    }
    static get relationMappings() {}

    static get modifies(){

    }
}
module.exports = ProductCategory