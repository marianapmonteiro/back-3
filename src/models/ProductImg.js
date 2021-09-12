const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class ProductImg extends Model{
    static get tableName() {
        return "product_images"
    }
    static get idColumn() {
        return "id"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["url", "product_id"],
            properties: {
                id: {type: "integer"},
                url: {type:"string", minLength:1, maxLength: 255},
                product_id: {type: "integer"}
            },
        }
    }
    static get relationMappings() {
        
    }

    static get modifies(){

    }
}
module.exports = ProductImg