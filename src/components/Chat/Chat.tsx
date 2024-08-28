import { Footer } from "./Footer";
import { Header } from "./Header";
import { MessageReceived } from "./MessageReceived";
import { MessageSent } from "./MessageSent";

export function Chat() {
  return (
    <div className="bg-secondary h-screen">
      <Header />
      <div className="p-7">
        <div className="flex justify-center mb-8">
          <h6 className="text-sm text-message font-light">Hoje</h6>
        </div>
        <MessageReceived />
        <MessageSent />
      </div>
      <Footer />
    </div>
  );
}
