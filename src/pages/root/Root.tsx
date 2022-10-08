import { Main, Wrapper } from "../../assets/styled/common";
import Link from "../../hooks/Link";

const RootPage = () => {
  return (
    <Main>
      <Wrapper>
        <h2>Main</h2>
        <Link to="/about">About</Link>
      </Wrapper>
    </Main>
  );
};

export default RootPage;
