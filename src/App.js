import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Movies from './Component/Movies/Movies';
import MovieDetails from './Component/MovieDetails/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Movies />
        </Route>
        <Route path="/movie/:id/">
        <MovieDetails />
        </Route>
        <Route path="*">
          <h1 className="text-center">404 not found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
