import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface LocationContextProps {
  location: {
    pathName: string;
  };
  setLocation: Dispatch<SetStateAction<{ pathName: string }>>;
}
export const LocationContext = createContext<LocationContextProps>(null!);

export interface IRoutesProps {
  children: ReactNode;
}

const Router = ({ children }: IRoutesProps) => {
  const [location, setLocation] = useState({ pathName: "/" });
  return (
    <LocationContext.Provider
      children={children}
      value={{ location, setLocation }}
    />
  );
};

export default Router;
