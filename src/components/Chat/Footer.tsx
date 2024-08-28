import { PaperPlaneRight } from "phosphor-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <div className="fixed bottom-0 w-full">
      <form action="" method="post" className="flex items-center bg-white p-6">
        <input
          type="text"
          name="message"
          className="bg-secondary w-full rounded-full py-3.5 px-5 text-message placeholder:text-sm mr-3"
          placeholder={t("typeHere")}
        />
        <PaperPlaneRight size={30} className="hover:cursor-pointer" />
      </form>
    </div>
  );
}
