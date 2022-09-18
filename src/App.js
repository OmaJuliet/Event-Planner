import Navbar from './components/Navbar';
import Home from './components/Home';
import Page from './components/Page';
import { Route, Switch, useLocation } from 'react-router-dom';
// BrowserRouter as Router
import Create from './components/Create';
import EventDetails from './components/EventDetails';
import NotFound from './components/NotFound';
import { AnimatePresence } from 'framer-motion';




function App() {
  const location = useLocation();

  return (

    // <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <AnimatePresence>
            <Switch location={location} key={location.key}>
              <Route exact path="/" >
                <Page />
              </Route>
              <Route exact path="/eventlist" >
                <Home />
              </Route>
              <Route path="/create" >
                <Create />
              </Route>
              <Route path="/blogs/:id" >
                <EventDetails />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </AnimatePresence>

        </div>
      </div>
    // </Router>


  );
}

export default App;
