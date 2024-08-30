import { io } from "../index";

export const active_users = Array();
export function Socket_server() {
  io.on("connection", (client: any) => {
    console.log("connect to socket", client.id);

    client.on("connect user", (data: any) => {
      let obj = {
        user_id: data.id,
        socket_id: client.id,
      };

      active_users.push(obj);

      console.log(active_users);
    });

    client.on("disconnect", () => {
      console.log("disconnect to socket", client.id);
    });
  });
}
