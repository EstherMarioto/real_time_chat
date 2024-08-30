import { PaperPlaneRight } from "phosphor-react";
import { MutableRefObject } from "react";
import { useTranslation } from "react-i18next";
import { Socket } from "socket.io-client";

type FooterProps = {
  messageRef: MutableRefObject<HTMLInputElement | null>;
  SetMessageList: React.Dispatch<React.SetStateAction<any[]>>;
  socket: Socket;
};

export function Footer({ messageRef, SetMessageList, socket }: FooterProps) {
  const { t } = useTranslation();

  const handleSubmit = () => {
    const message = messageRef.current?.value;

    if (message) {
      SetMessageList((current) => [
        ...current,
        { userSent: socket.id, userReceived: socket.id, message: message },
      ]);
      clearInput();
    }
  };

  const clearInput = () => {
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  return (
    <div className="fixed bottom-0 w-full">
      <form
        action=""
        method="post"
        className="flex items-center bg-white p-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          name="message"
          ref={messageRef}
          className="bg-secondary w-full rounded-full py-3.5 px-5 text-message placeholder:text-sm mr-3"
          placeholder={t("typeHere")}
        />
        <PaperPlaneRight
          size={30}
          onClick={() => handleSubmit()}
          className="hover:cursor-pointer"
          aria-label={t("send")}
        />
      </form>
    </div>
  );
}
