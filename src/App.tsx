import Route from '@components/Route';
import Router from '@components/Router';
import Routes from '@components/Routes';
import About from '@pages/About';
import Root from '@pages/Root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Root />} />
        <Route path="/about" component={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
