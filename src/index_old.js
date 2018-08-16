import {render} from 'react-dom';
import Home from 'routes/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class AppInitializer {

  run() {
    render(
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={ Home } exact />
            <Route path="/history" component={ History } exact />
          </Switch>
          <Footer />
        </div>
        <h2>wtf</h2>
      </Router>

      , document.getElementById('app')
    );
  }
}

new AppInitializer().run();
