import {render} from 'react-dom';
import DataActions from 'flux/actions/DataActions';
import Home from 'components/Home';

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
          <div>
            <Switch>
              <Route path="/" component={ Home } exact />
              <Route render={() => { return <Redirect to="/" /> }} />
            </Switch>
          </div>
        </Router>

        , document.getElementById('app')
      );
    })
  }
}

new AppInitializer().run();
