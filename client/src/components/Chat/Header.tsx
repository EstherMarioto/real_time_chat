import { CaretLeft } from "phosphor-react";
import user from "../../assets/user.png";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex bg-white items-center pt-12 pb-5 px-5">
      <Link to={"/home"}>
        <CaretLeft size={30} />
      </Link>
      <img className="w-16 h-16 rounded-full mx-4" src={user} alt="Perfil" />
      <div>
        <h6 className="text-xl font-bold mb-1">Jackson</h6>
        <h6 className="text-sm font-light">Online</h6>
      </div>
    </div>
  );
}
