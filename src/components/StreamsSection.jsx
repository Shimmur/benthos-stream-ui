import { useContext } from "react";
import { StreamsContext } from "../cache/streams";
import { StreamsTable } from "./StreamsTable/StreamsTable";
import { StatsFooter } from "./StatsFooter";

export const StreamsSection = () => {
  const {
    streams: { isLoading, error },
  } = useContext(StreamsContext);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return <StreamsTable />;
};
