import { NavLinks } from "./NavLinks";
import logo from "../logo.svg";

export const Nav = () => {
  return (
    <div className="h-screen flex-grow max-w-24 p-4">
      <img src={logo} className="w-16" alt="logo" />
      <NavLinks />
    </div>
  );
};
