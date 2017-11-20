import * as React from 'react';
import * as redux from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Greeting from './components/general/Greeting';
import SocialInformation from './components/general/SocialInformation';
import ContactForm from './containers/ContactForm';
import Footer from './components/layouts/Footer';
import './App.css';

import * as state from './state';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();

const store: redux.Store<state.RootState> = redux.createStore(
  state.reducers,
  composeWithDevTools(
    redux.applyMiddleware(sagaMiddleware), // TODO SAGA
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Greeting />
          <SocialInformation />
          <ContactForm />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
