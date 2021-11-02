import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StreamsContext } from "../cache/streams";

export const StreamDetail = ({ streamId }) => {
  const {
    loadStream,
    stream: { stream, isLoading, error },
  } = useContext(StreamsContext);

  useEffect(() => {
    loadStream(streamId);
  }, [streamId]);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <>
      <Link className="text-5xl" to="/">
        ←
      </Link>
      <h1 className="text-5xl p4 border-b-4 border-indigo-600">{streamId}</h1>
      <div className="overflow-y-scroll">
        <pre>
          <code className="overflow-y-scroll">
            {JSON.stringify(stream.config, null, 2)}
          </code>
        </pre>
      </div>
    </>
  );
};
