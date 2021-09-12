const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class Billing extends Model{
    static get tableName() {
        return "billings"
    }
    static get idColumn() {
        return "id"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["amount", "user_id", "product_id"],
            properties: {
                id: {type: "integer"},
                created_at: {type: "timestamp"},
                updated_at: {type: "timestamp"},
                deleted_at: {type: "timestamp"},
                amount: {type: "integer"},
                user_id: {type: "integer"},
                product_id: {type: "integer"},
            },
        }
    }
    static get relationMappings() {}

    static get modifies(){

    }
}
module.exports = Billing 