import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

export function Login() {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    changeLanguage(lang);
  };

  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    const username = usernameRef.current?.value;

    if (username) {
      const socket = await io("http://localhost:3001/");
      socket.emit("set_username", username);
    }
  };
  return (
    <>
      <div className="flex justify-end gap-2 m-2 font-bold">
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
      <button onClick={() => handleSubmit()}>teste </button>
      <div className="flex flex-col items-center mt-28">
        <h1 className="font-openSans font-black text-primary text-5xl mb-16">
          {t("title")}
        </h1>
        <h2 className="font-bold text-2xl mb-7">{t("login")}</h2>
        <form action="" method="post" className="w-1/4">
          <input
            type="email"
            name="email"
            ref={usernameRef}
            className="border w-full rounded-full border-black py-3 px-5 mb-5"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="border w-full rounded-full border-black py-3 px-5 mb-12"
            placeholder={t("password")}
          />
          <button
            type="submit"
            className="bg-primary w-full rounded-full py-3 text-white font-semibold"
          >
            {t("toEnter")}
          </button>
        </form>
        <h6 className="mt-8 text-sm text-gray-400">
          {t("dontHaveAnAccount")}
          <Link to={"/register"} className="text-primary ml-1">
            {t("signUp")}
          </Link>
        </h6>
      </div>
    </>
  );
}
