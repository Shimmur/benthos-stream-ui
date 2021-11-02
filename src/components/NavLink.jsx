import { Link, useLocation } from "react-router-dom";

const setActiveClass = (name, location) => {
  console.log({ location });
  if (location.pathname.includes(name)) return "text-green-300 ";
  return "text-gray-100 ";
};
export const NavLink = ({ name }) => {
  const location = useLocation();

  return (
    <Link
      className={`m-2 w-24 ${setActiveClass(name, location)}`}
      to={`/${name}`}
    >
      {name}
    </Link>
  );
};
