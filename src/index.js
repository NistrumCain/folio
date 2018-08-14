import {render} from 'react-dom';
import Home from 'routes/Home';
import Header from 'components/Header';
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
        </div>
      </Router>

      , document.getElementById('app')
    );
  }
}

new AppInitializer().run();
