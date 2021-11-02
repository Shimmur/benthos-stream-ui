import { useContext } from "react";
import { NavLink } from "./NavLink";
import { EndpointsContext } from "../cache/endpoints";

const boringEndpoints = [
  "/metrics",
  "/ping",
  "/ready",
  "/version",
  "/endpoints",
];

export const NavLinks = () => {
  const {
    endpoints: { endpoints, isLoading, error },
  } = useContext(EndpointsContext);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  const navLinks = Object.entries(endpoints)
    .filter(([endpoint]) => {
      if (endpoint.endsWith("ready") || endpoint.includes("{id}")) return false;
      if (boringEndpoints.includes(endpoint)) return false;
      return true;
    })
    .map(([endpoint]) => <NavLink key={endpoint} name={endpoint.slice(1)} />);
  return (
    <div className="flex flex-col flex-wrap max-w-24 h-screen">{navLinks}</div>
  );
};
