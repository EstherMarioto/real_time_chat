import { io } from "../index";
import { AppDataSource } from "../database/db";
import { Socket } from "socket.io";

interface MessageData {
  userSent: string;
  userReceived: string;
  message: string;
}

export function Socket_server() {
  io.on("connection", (client: Socket) => {
    console.log("Connectado ao socket", client.id);

    client.on("send_message", async (data: MessageData) => {
      try {
        await AppDataSource.query(
          "INSERT INTO messages (userSent, userReceived, message) VALUES ($1, $2, $3)",
          [data.userSent, data.userReceived, data.message]
        );
        console.log("Mensagem Salva no Banco de Dados.", data);
      } catch (error) {
        console.error("Erro ao salvar a mensagem no Banco de Dados.", error);
      }

      io.emit("received_message", data.message);
    });

    client.on("disconnect", () => {
      console.log("Desconectado do socket", client.id);
    });
  });
}
