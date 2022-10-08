import { useContext } from "react";
import { LocationContext } from "../router/Router";

const useRouter = () => {
  const { setLocation } = useContext(LocationContext);

  const push = (to: string) => {
    setLocation({ pathName: to });
    return history.pushState(null, "", to);
  };
  return { push };
};

export default useRouter;
