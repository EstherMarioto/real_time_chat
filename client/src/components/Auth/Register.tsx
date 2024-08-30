import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Locale } from "../Locale";

export function Register() {
  const { t } = useTranslation();

  return (
    <>
      <Locale />
      <div className="flex flex-col items-center mt-28">
        <h1 className="font-openSans font-black text-primary text-5xl mb-16">
          {t("title")}
        </h1>
        <h2 className="font-bold text-2xl mb-7"> {t("signUp")}</h2>
        <form action="" method="post" className="w-1/4">
          <input
            type="text"
            name="username"
            className="border w-full rounded-full border-black py-3 px-5 mb-5"
            placeholder={t("username")}
          />
          <input
            type="email"
            name="email"
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
            {t("signUp")}
          </button>
        </form>
        <h6 className="mt-8 text-sm text-gray-400">
          {t("haveAnAccount")}
          <Link to={"/login"} className="text-primary ml-1">
            {t("connect")}
          </Link>
        </h6>
      </div>
    </>
  );
}
