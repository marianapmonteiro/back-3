module.exports = {
    createdAt (knex, table) {
        table.timestamp("created_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))
    },

    updatedAt (knex, table) {
        if (process.env.NODE_ENV === "test") {
        table.timestamp("updated_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP"))
        }else {
        table.timestamp("updated_at").notNullable().defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"))}
    },
        
}