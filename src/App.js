/* @flow */

import * as React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import PersonsList from './components/Persons/PersonsList';

type AppState = {
  showPersons: boolean
};


class App extends React.Component<{}, AppState> {
  static defaultProps: {};
  state = {
    showPersons: true,
  };

  togglePersons = () => {
    return this.setState((prevSate: AppState) => ({ showPersons: !prevSate.showPersons }));
  };

  render(): React.Node {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo' />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <button className={this.state.showPersons ? styles.showPersons : styles.hidePersons} onClick={this.togglePersons}>{this.state.showPersons? 'Hide' : 'Show'} Persons</button>
        {this.state.showPersons && <PersonsList />}
      </div>
    );
  }
}

export default App;
