import { ReactElement, useContext, useEffect, useState } from "react";
import { LocationContext } from "./Router";

interface IRouteProps {
  path: string;
  component: ReactElement;
  state?: {};
}

const Route = ({ path, component, state }: IRouteProps) => {
  const [isPath, setIsPath] = useState(false);
  const { pathname } = window.location;
  const { setLocation } = useContext(LocationContext);

  // 라우터 변경
  const route = (pathname: string) => {
    path === pathname ? setIsPath(true) : setIsPath(false);

    window.onpopstate = () => {
      setLocation({ pathName: pathname });
    };
  };

  useEffect(() => {
    route(pathname);
  }, [pathname]);
  return isPath ? component : null;
};

export default Route;
