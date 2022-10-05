import { Main, OnDirectButton, Wrapper } from "../../styled/common";

const AboutPage = () => {
  // History API 사용하여 SPA Router 기능 구현
  window.onpopstate = function (e) {
    console.log(
      `${JSON.stringify(e.state)} | ${location.origin} | ${location.pathname}`
    );
  };

  let state = { page_id: 1, data: "test" };
  const OnclickHandler = () => {
    const url = location.origin + "/";
    history.pushState(state, "", url);
  };

  return (
    <Main>
      <Wrapper>
        <p>About</p>
        <OnDirectButton onClick={OnclickHandler}>GO Main</OnDirectButton>
      </Wrapper>
    </Main>
  );
};

export default AboutPage;
