import * as React from 'react';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Greeting from './components/general/Greeting';
import SocialInformation from './components/general/SocialInformation';
import ContactForm from './components/general/ContactForm';
import Footer from './components/layouts/Footer';
import './App.css';

import * as state from './state';

const store: redux.Store<state.RootState> = redux.createStore(
  state.reducers,
  composeWithDevTools(
    // applyMiddleware(...middleware), // TODO SAGA
    // other store enhancers if any
  )
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Greeting />
          <SocialInformation />
          <ContactForm test="fdsg" />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
