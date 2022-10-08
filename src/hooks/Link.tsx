import { ReactNode } from "react";
import useRouter from "./useRouter";

interface ILinkProps {
  children: ReactNode;
  to: string;
}

const Link = ({ children, to }: ILinkProps) => {
  const { push } = useRouter();

  // const LinkHandler = (e: FormEvent<HTMLLinkElement>) => {
  //   e.preventDefault;
  // };

  return (
    <a
      onClick={(e) => {
        e.preventDefault;
        push(to);
      }}
    >
      {children}
    </a>
  );
};

export default Link;
