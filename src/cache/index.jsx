import { StreamsCache } from "./streams";
import { StatsCache } from "./stats";
import { EndpointsCache } from "./endpoints";

export const Cache = ({ children }) => (
  <StreamsCache>
    <StatsCache>{children}</StatsCache>
  </StreamsCache>
);
