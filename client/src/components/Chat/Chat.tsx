import { useTranslation } from "react-i18next";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MessageReceived } from "./MessageReceived";
import { MessageSent } from "./MessageSent";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { Locale } from "../Locale";

export function Chat() {
  const { t } = useTranslation();

  const [messageList, SetMessageList] = useState<any[]>([]);
  const messageRef = useRef<HTMLInputElement>(null);

  const socket = io("http://localhost:3002/");

  useEffect(() => {
    socket.on("receive_message", (data: any) => {
      SetMessageList((current: any) => [...current, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  return (
    <>
      <Locale />
      <div className="bg-secondary h-screen">
        <Header />
        <div className="p-7">
          <div className="flex justify-center mb-8">
            <h6 className="text-sm text-message font-light">{t("today")}</h6>
          </div>
          {messageList.map((message, index) => (
            <MessageReceived key={index} message={message.message} />
          ))}
          <MessageSent />
        </div>
        <Footer
          messageRef={messageRef}
          SetMessageList={SetMessageList}
          socket={socket}
        />
      </div>
    </>
  );
}
