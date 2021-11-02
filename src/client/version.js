import { GET } from ".";

export const getVersion = () => {
  return GET("version");
};
