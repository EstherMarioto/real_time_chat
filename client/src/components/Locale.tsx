import { useTranslation } from "react-i18next";

export function Locale() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    changeLanguage(lang);
  };
  return (
    <div className="flex justify-end gap-2 m-2 font-bold bg-white">
      <h6
        onClick={() => handleChangeLanguage("pt")}
        className="hover:cursor-pointer"
      >
        PT
      </h6>
      <h6
        onClick={() => handleChangeLanguage("en")}
        className="hover:cursor-pointer"
      >
        EN
      </h6>
    </div>
  );
}
