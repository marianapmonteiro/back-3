const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class Product extends Model{
    static get tableName() {
        return "products"
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
                title: {type: "string", minLength:1, maxLength: 100},
                description: {type: "string", minLength:1, maxLength: 255},
                category: {type: "string", minLength:1, maxLength: 15},
                price: {type: "integer"},
            },
        }
    }
    static get relationMappings() {
        const User= require ("./User")
        const ProductImg = require ("./ProductImg")
        const ProductCategory = require ("./ProductCategory")
        const UserProduct = require ("./UserProduct")

        return{
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: "products.id",
                    through: {
                        modelClass: UserProduct,
                        from: "user_products.product.id",
                        to: "user_products.user_id",
                        
                    },
                    to: "users.id",
                }
            },
            imgs: {
                relation: Model.HasManyRelation,
                modelClass: ProductImg,
                join: {
                    from: "products.id",
                    to: "product_images.product_id"
            }
        },
        categories: {
            relation: Model.HasManyRelation,
            modelClass: ProductCategory,
            join: {
                from: "products.id",
                through: {
                    modelClass: ProductCategory,
                    from: "user_categories.product_id",
                    to: "user_categories.category_id"
                },
                to: "categories.id",
        }
    }
    }

}
}
//  static get modifies(){
// }
module.exports = Product