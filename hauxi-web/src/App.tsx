import * as React from 'react';
import Greeting from './components/general/Greeting';
import SocialInformation from './components/general/SocialInformation';
import ContactForm from './components/general/ContactForm';
import Footer from './components/layouts/Footer';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Greeting />
        <SocialInformation />
        <ContactForm test="fdsg" />
        <Footer />
      </div>
    );
  }
}

export default App;
