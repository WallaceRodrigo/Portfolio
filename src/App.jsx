import './App.css';
import { Route, Switch } from 'react-router-dom';
import { useMemo, useState } from 'react';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ActiveDropDown from './context/ActiveDropDown';

function App() {
  const [active, setActive] = useState(false);

  const value = useMemo(() => ({
    active, setActive,
  }), [active]);

  return (
    <div className="App">
      <ActiveDropDown.Provider value={ value }>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/aboutMe" component={ AboutMe } />
          <Route exact path="/contact" component={ Contact } />
        </Switch>
      </ActiveDropDown.Provider>
    </div>
  );
}

export default App;
