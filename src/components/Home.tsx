import { Header } from "./Header";
import { Message } from "./Message";

export function Home() {
  return (
    <>
      <Header />
      <div className="px-5">
        <Message />
      </div>
    </>
  );
}
