import Route from "./router/Route";
import Router from "./router/Router";
import About from "./pages/about/About";
import Root from "./pages/root/Root";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
