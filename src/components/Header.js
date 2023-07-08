import { Link } from "react-router-dom";
import useCurrentPathName from "../utils/useCurrentPathName";

const Header = () => {
  return (
    <header className="sticky top-0 z-10  ">
      <nav className="max-w-6xl mx-auto px-3 h-20 flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo"
              className="w-[160px] cursor-pointer"
            />
          </Link>
        </div>
        <ul className="flex items-center gap-8">
          <li
            className={`py-1  ${
              useCurrentPathName("/")
                ? "text-black font-semibold border-b-2 border-red-500"
                : "text-gray-400"
            }`}>
            <Link to="/">Home</Link>
          </li>
          <li
            className={`py-1  ${
              useCurrentPathName("/offers")
                ? "text-black font-semibold border-b-2 border-red-500"
                : "text-gray-400"
            }`}>
            <Link to="/offers">Offers</Link>
          </li>
          <li
            className={`py-1  ${
              useCurrentPathName("/sign-in")
                ? "text-black font-semibold border-b-2 border-red-500"
                : "text-gray-400"
            }`}>
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
