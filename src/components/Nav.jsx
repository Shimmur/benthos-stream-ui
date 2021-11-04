import logo from "../logo.svg";
import { NavLink } from "./NavLink";

export const Nav = () => {
  return (
    <div className="h-screen flex-grow max-w-24 p-4">
      <img src={logo} className="w-16" alt="logo" />
      <div className="flex flex-col flex-wrap max-w-24 h-screen">
        <NavLink key="stats" name="stats" />
        <NavLink key="streams" name="streams" />
        <NavLink key="resources" name="resources" />
      </div>
    </div>
  );
};
