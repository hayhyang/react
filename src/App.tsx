import Route from '@components/Route';
import Router from '@components/Router';
import Routes from '@components/Routes';
import About from '@pages/About';
import Root from '@pages/Root';
import Todos from '@pages/Todos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
        <Route path="/todos" component={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App;
