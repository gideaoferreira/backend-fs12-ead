import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "ead_fs_12",
    "root",
    "",
    {
        port: 3306,
        host: "localhost",
        dialect: "mysql",
        logging: (...msg) => console.log(msg),
    }
)