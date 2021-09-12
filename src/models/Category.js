const { Model } = require ("objection")
const knex = require ("../db/knex")

Model.knex(knex)

class Category extends Model{
    static get tableName() {
        return "categories"
    }
    static get idColumn() {
        return "id"
    }
    static get jsonSchema() {
        return {
            type: "object",
            required: ["category"],
            properties: {
                id: {type: "integer"},
                category: {type:"string", minLength:1, maxLength: 15},
            },
        }
    }
    static get relationMappings() {}

    static get modifies(){

    }
}
module.exports = Category 