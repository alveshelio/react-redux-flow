/* @flow */

import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonsList from './components/Persons/PersonsList';

type AppState = {
  showPersons: boolean
};


class App extends React.Component<void, AppState> {
  state = {
    showPersons: true,
  };

  togglePersons = () => {
    return this.setState((prevSate: AppState) => ({ showPersons: !prevSate.showPersons }));
  };

  render(): React.Node {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <button className={this.state.showPersons ? 'showPersons' : 'hidePersons'} onClick={this.togglePersons}>{this.state.showPersons? 'Hide' : 'Show'} Persons</button>
        {this.state.showPersons && <PersonsList />}
      </div>
    );
  }
}

export default App;
