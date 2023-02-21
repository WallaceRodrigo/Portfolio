import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import ActiveDropDown from './context/ActiveDropDown';
import DarkLightMode from './context/DarkLightMode';
import useAppFunctions from './hooks/useAppFunctions';

function App() {
  const { value, valueMode, darkLightMode } = useAppFunctions();

  return (
    <div className={ `App ${darkLightMode}` }>
      <DarkLightMode.Provider value={ valueMode }>
        <ActiveDropDown.Provider value={ value }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/aboutMe" component={ AboutMe } />
            <Route exact path="/contact" component={ Contact } />
          </Switch>
        </ActiveDropDown.Provider>
      </DarkLightMode.Provider>
    </div>
  );
}

export default App;
