const sequelize = require("sequelize");
// local
// const connDB = new sequelize('','postgres','',{
//     dialect : "postgres",
//     host : "localhost",
//     port : 5432
// })

//heroku
const connDB = new sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
}
})

module.exports = connDB;

