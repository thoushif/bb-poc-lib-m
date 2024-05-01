import { withName } from "dep-pkg";

export const getHello = () => {
  return "Hello" + withName("thoushif");
};
