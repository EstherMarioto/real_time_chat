import user from "../../assets/user.png";

export function Header() {
  return (
    <div className="flex items-center pt-12 pb-5 px-5">
      <img className="w-16 h-16 rounded-full mx-4" src={user} alt="Perfil" />
      <div>
        <h6 className="text-xl font-bold mb-1">Jackson</h6>
        <h6 className="text-sm font-light">Online</h6>
      </div>
    </div>
  );
}
