import { useEffect, useState, createContext } from "react";
import { getStats } from "../client/stats";
import { getVersion } from "../client/version";

export const StatsContext = createContext();

export const StatsCache = ({ children }) => {
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [version, setVersion] = useState([]);
  const [versionIsLoading, setVersionIsLoading] = useState(true);
  const [versionError, setVersionError] = useState(false);
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
  const loadVersion = async () => {
    setVersionIsLoading(true);
    try {
      const response = await getVersion();
      const version = await response;
      setVersion(version);
    } catch (e) {
      console.error(e);
      setVersionError(e);
    } finally {
      setVersionIsLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
    loadVersion();
  }, []);

  const cacheValue = {
    stats: {
      stats,
      isLoading,
      error,
    },
    version: {
      version,
      versionIsLoading,
      versionError,
    },
    loadStats,
    loadVersion,
  };
  return (
    <StatsContext.Provider value={cacheValue}>{children}</StatsContext.Provider>
  );
};
