import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Message } from "../entities/message.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  database: "realtimechat",
  username: "root",
  password: "",
  port: 3306,
  entities: [User, Message],
  synchronize: true,
});
