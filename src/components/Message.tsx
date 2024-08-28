import { Link } from "react-router-dom";
import user from "../assets/user.png";

export function Message() {
  return (
    <>
      <Link
        to={"/chat"}
        className="flex justify-between items-center bg-secondary rounded-2xl px-4 py-3 mb-3"
      >
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-5"
            src={user}
            alt="Perfil"
          />
          <div>
            <h6 className="text-xl font-bold mb-1">Jackson</h6>
            <h6 className="text-sm font-light">Are you there?</h6>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h6 className="text-xs font-light mb-1">02:40 PM</h6>
          <div className="flex justify-center items-center w-5 h-5 bg-notification rounded-full text-xs text-white font-bold mr-2">
            2
          </div>
        </div>
      </Link>

      <div className="flex justify-between items-center bg-card rounded-2xl px-4 py-3">
        <div className="flex items-center">
          <img
            className="w-16 h-16 rounded-full mr-5"
            src={user}
            alt="Perfil"
          />
          <div>
            <h6 className="text-xl font-bold mb-1">Jackson</h6>
            <h6 className="text-sm font-light">Are you there?</h6>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h6 className="text-xs font-light mb-1">02:40 PM</h6>
          <div className="flex justify-center items-center w-5 h-5 bg-notification rounded-full text-xs text-white font-bold mr-2">
            2
          </div>
        </div>
      </div>
    </>
  );
}
