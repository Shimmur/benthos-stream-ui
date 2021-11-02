import { useEffect, useState, createContext } from "react";
import { getEndpoints } from "../client/Endpoints";

export const EndpointsContext = createContext();

export const EndpointsCache = ({ children }) => {
  const [endpoints, setEndpoints] = useState({});
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState([]);
  const loadEndpoints = async () => {
    setIsLoading(true);
    try {
      const response = await getEndpoints();
      const endpoints = await response;
      setEndpoints(endpoints);
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEndpoints();
  }, []);

  const cacheValue = {
    endpoints: {
      endpoints,
      isLoading,
      error,
      loadEndpoints,
    },
  };
  return (
    <EndpointsContext.Provider value={cacheValue}>{children}</EndpointsContext.Provider>
  );
};
