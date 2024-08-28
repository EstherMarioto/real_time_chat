import user from "../assets/user.png";

export function Header() {
  return (
    <div className="flex justify-between items-center mt-16 mb-12 mx-8">
      <h1 className="font-openSans font-black text-primary text-4xl">
        Real Time Chat
      </h1>
      <img
        className="w-[61px] h-[61px] rounded-full border-[3px] border-primary"
        src={user}
        alt="Perfil"
      />
    </div>
  );
}
