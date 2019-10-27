require('dotenv').config();

module.exports = {
    "migrationDirectory": "migrations",
    "driver": "pg",
    "connectionString": (process.env.NODE_ENV === "test")
        ? process.env.TEST_DATABASE_URL
        : process.env.DATABASE_URL,
    "ssl": !!process.env.SSL,
    "host": process.env.Host,
    "port": process.env.PORT,
    "database": process.env.Database,
    "username": process.env.User,
    "password": process.env.Password

}
