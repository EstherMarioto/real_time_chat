import { PaperPlaneRight } from "phosphor-react";
import { useTranslation } from "react-i18next";

export function Footer({
  messageRef,
  SetMessageList,
  socket,
}: {
  messageRef: any;
  SetMessageList: any;
  socket: any;
}) {
  const { t } = useTranslation();

  const handleSubmit = () => {
    const message = messageRef.current?.value;

    if (message) {
      SetMessageList((current: any) => [
        ...current,
        { id: socket.id, text: message },
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
      <form action="" method="post" className="flex items-center bg-white p-6">
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
        />
      </form>
    </div>
  );
}
