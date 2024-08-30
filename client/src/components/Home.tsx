import { Header } from "./Header";
import { Locale } from "./Locale";
import { Message } from "./Message";

export function Home() {
  return (
    <>
      <Locale />
      <Header />
      <div className="px-5">
        <Message />
      </div>
    </>
  );
}
