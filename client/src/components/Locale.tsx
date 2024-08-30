import { useTranslation } from "react-i18next";

type Language = "pt" | "en";

export function Locale() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (lang: Language) => {
    changeLanguage(lang);
  };

  return (
    <div className="flex justify-end gap-2 m-2 font-bold bg-white p-2 rounded">
      <h6
        onClick={() => handleChangeLanguage("pt")}
        className="hover:cursor-pointer"
        aria-label={t("changeToPortuguese")}
      >
        PT
      </h6>
      <h6
        onClick={() => handleChangeLanguage("en")}
        className="hover:cursor-pointer"
        aria-label={t("changeToEnglish")}
      >
        EN
      </h6>
    </div>
  );
}
