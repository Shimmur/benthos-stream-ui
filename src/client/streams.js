import { GET } from ".";

export const getStreams = () => {
  return GET("streams");
};

export const getStream = (streamId) => {
  return GET(`streams/${streamId}`);
};
