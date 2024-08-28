import { useTranslation } from "react-i18next";
import user from "../assets/user.png";

export function Header() {
  const { t } = useTranslation();
  return (
    <div className="flex justify-between items-center mt-16 mb-12 mx-8">
      <h1 className="font-openSans font-black text-primary text-4xl">
        {t("title")}
      </h1>
      <img
        className="w-[61px] h-[61px] rounded-full border-[3px] border-primary"
        src={user}
        alt="Perfil"
      />
    </div>
  );
}
