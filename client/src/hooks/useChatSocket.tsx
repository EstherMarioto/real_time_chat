import { useEffect } from "react";
import io from "socket.io-client";

export function useChatSocket(
  SetMessageList: React.Dispatch<React.SetStateAction<any[]>>
) {
  useEffect(() => {
    const socket = io("http://localhost:3002/");

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    socket.on("receive_message", (data: any) => {
      SetMessageList((current) => [...current, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("receive_message");
    };
  }, [SetMessageList]);
}
