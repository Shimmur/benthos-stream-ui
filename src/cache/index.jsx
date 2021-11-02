import { StreamsCache } from "./streams";
import { StatsCache } from "./stats";

export const Cache = ({ children }) => (
  <StreamsCache>
    <StatsCache>{children}</StatsCache>
  </StreamsCache>
);
