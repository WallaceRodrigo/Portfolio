import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/aboutMe" component={ AboutMe } />
        <Route exact path="/contact" component={ Contact } />
      </Switch>
    </div>
  );
}

export default App;
