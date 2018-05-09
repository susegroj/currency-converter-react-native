import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './scenes/Home/Home.js';
import CurrenciesList from './scenes/CurrenciesList/CurrenciesList.js';
import Options from './scenes/Options/Options.js';
import Themes from './scenes/Themes/Themes.js';

import CustomNavBar from './components/CustomNavBar/CustomNavBar.js';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="login" hideNavBar title="Home" component={Home} />
      <Scene key="currenciesList" hideNavBar navBar={CustomNavBar} title="Currencies" component={CurrenciesList} />
      <Scene key="options" hideNavBar title="Options" component={Options} />
      <Scene key="themes" title="Themes" component={Themes} />
    </Scene>
  </Router>
);

export default App;
