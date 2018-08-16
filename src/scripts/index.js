import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions';
import Home from './routes/Home';
import History from './routes/History';
import Header from './components/Header';
import Footer from './components/Footer';
import '../sass/layout.scss'


import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

class AppInitializer {
  buildRoutes(data){
    return data.pages.map((page, i) => {
      return(
        <Router
          key={i}
          component={ Home }
          path={'/${page.slug}'}
          exact
        />
      )
    })
  }

  run() {
    DataActions.getPages((response)=>{
      render(
        <Router>
          <div className="site-wrapper">
            <Header/>
            <Switch>
              <Route  path="/" component={ Home } exact />
              <Route path="/history" component={ History } />
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
            <Footer />
          </div>
        </Router>

        , document.getElementById('app')
      );
    })
  }
}

new AppInitializer().run();
