const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class UserProduct extends Model{
    static get tableName() {
        return "user_products"
    }
    static get idColumn() {
        return "id"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["user_id", "product_id"],
            properties: {
                id: {type: "integer"},
                created_at: {type: "timestamp"},
                updated_at: {type: "timestamp"},
                deleted_at: {type: "timestamp"},
                user_id: {type: "integer"},
                product_id: {type: "integer"},
            },
        }
    }
    static get relationMappings() {}

    static get modifies(){
        
    }
}
module.exports = UserProduct