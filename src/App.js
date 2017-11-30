/* @flow */

import * as React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import PersonsList from './components/Persons/PersonsList';
import Aux from './HOC/Aux';
// import WithClass from './HOC/WithClass';
import withStyles from './HOC/withStyles';

type Person = {
  name: string,
  age: number,
  id: string
};

type AppState = {
  showPersons: boolean,
  toggleClickCount: number,
  persons: Array<Person>
};

type AppProps = {};


class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    console.log('[App.js] Inside Constructor');
  }
  state = {
    persons: [
      { id: 'abc', name: 'Helio', age: 41 },
      { id: 'def', name: 'Julie', age: 45 },
      { id: 'ghi', name: 'Evan', age: 9 },
    ],
    showPersons: true,
    toggleClickCount: 0,
  };

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
  }

  // Instead of using shouldComponentUpdate, we can use PureComponent
  // available from React since version 16

  // shouldComponentUpdate(nextProps: AppProps, nextState: AppState): boolean {
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps: AppProps, nextState: AppState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  nameChangeHandler = (e: SyntheticInputEvent<HTMLInputElement>, id: string) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p: Person) => p.id === id);
    persons[personIndex].name = e.target.value;
    this.setState(() => ({ persons }));
  };

  deletePersonHandler = (id: string) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((person: Person) => person.id !== id);
    this.setState(() => ({ persons: filteredPersons }));
  };

  togglePersons = () => {
    return this.setState((prevState: AppState) => ({ showPersons: !prevState.showPersons, toggleClickCount: prevState.toggleClickCount + 1 }));
  };

  onShowPersons = () =>{
    this.setState(() => ({ showPersons: true }));
};

  render(): React.Node {
    console.log('[App.js] Inside Render Method');
    return (
      <Aux>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo'/>
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        <button onClick={this.onShowPersons}>Show Persons</button>
        {!!this.state.persons.length && <button
          className={this.state.showPersons ? styles.showPersons : styles.hidePersons}
          onClick={this.togglePersons}
        >
          {this.state.showPersons ? 'Hide' : 'Show'} Persons
        </button>}
        <span>Button clicked ${this.state.toggleClickCount} times</span>
        {this.state.showPersons && <PersonsList
          persons={this.state.persons}
          onNameChange={this.nameChangeHandler}
          onDeletePerson={this.deletePersonHandler}
        />}
      </Aux>
    );
  }
}

export default withStyles(App, styles.App);
