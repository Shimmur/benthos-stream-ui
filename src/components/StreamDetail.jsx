import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { StreamsContext } from "../cache/streams";
import ReactJson from "react-json-view";

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
        <h1 className="text-5xl p4"> ← {streamId}</h1>
      </Link>
      <div className="max-h-full overflow-y-scroll border-b-2 border-t-2 border-indigo-600">
        <ReactJson
          src={stream.config}
          name={streamId}
          iconStyle="square"
          displayDataTypes={false}
          theme="summerfruit:inverted"
          style={{
            "font-family": "inherit",
          }}
        />
      </div>
    </>
  );
};
