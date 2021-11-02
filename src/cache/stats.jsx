import { useEffect, useState, createContext } from "react";
import { getStats } from "../client/stats";

export const StatsContext = createContext();

export const StatsCache = ({ children }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState([]);
  const loadStats = async () => {
    setIsLoading(true);
    try {
      const response = await getStats();
      const stats = await response;
      setStats(stats);
    } catch (e) {
      console.error(e);
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const cacheValue = {
    stats: {
      stats,
      isLoading,
      error,
      loadStats,
    },
  };
  return (
    <StatsContext.Provider value={cacheValue}>{children}</StatsContext.Provider>
  );
};
