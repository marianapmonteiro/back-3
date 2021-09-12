const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class User extends Model{
    static get tableName() {
        return "users"
    }
    static get idColumn() {
        return "id"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "username"],
            properties: {
                id: {type: "integer"},
                created_at: {type: "timestamp"},
                updated_at: {type: "timestamp"},
                deleted_at: {type: "timestamp"},
                name: {type: "string", minLength:1, maxLength: 100},
                username: {type: "string", minLength:1, maxLength: 45},
                pwd: {type: "string", minLength:1, maxLength: 255},
            },
        }
    }
    static get relationMappings() {
        const Billing= require ("./Billing")
        const Product = require ("./Product")
        const UserProduct = require ("./UserProduct")

        return{
            products: {
                relation: Model.ManyToManyRelation,
                modelClass: Product,
                join: {
                    from: "users.id",
                    through: {
                        modelClass: UserProduct,
                        from: "user_products.user_id",
                        to: "user_products.product.id",
                    },
                    to: "products.id"
                }
            },
            billings: {
                relation: Model.HasManyRelation,
                modelClass: Billing,
                join: {
                    from: "users.id",
                    to: "billings_user_id"
            }
        }
}
    }
    static get modifies(){}
}
module.exports = User 