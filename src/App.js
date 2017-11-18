/* @flow */

import * as React from 'react';
import logo from './logo.svg';
import styles from './App.css';
import PersonsList from './components/Persons/PersonsList';

type Person = {
  name: string,
  age: number,
  id: string
};

type AppState = {
  showPersons: boolean,
  persons: Array<Person>
};


class App extends React.Component<{}, AppState> {
  state = {
    persons: [
      { id: 'abc', name: 'Helio', age: 41 },
      { id: 'def', name: 'Julie', age: 45 },
      { id: 'ghi', name: 'Evan', age: 9 },
    ],
    showPersons: true,
  };

  nameChangeHandler = (e: SyntheticInputEvent<HTMLInputElement>, id: string) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex((p: Person) => p.id === id);
    persons[personIndex].name = e.target.value;
    this.setState(() => {
      return {
        persons
      }
    });
  };

  deletePersonHandler = (id: string) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter((person: Person) => person.id !== id);
    this.setState(() => ({ persons: filteredPersons }));
  };

  togglePersons = () => {
    return this.setState((prevSate: AppState) => ({ showPersons: !prevSate.showPersons }));
  };

  render(): React.Node {
    return (
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt='logo'/>
          <h1 className={styles.AppTitle}>Welcome to React</h1>
        </header>
        {!!this.state.persons.length && <button
          className={this.state.showPersons ? styles.showPersons : styles.hidePersons}
          onClick={this.togglePersons}
        >
          {this.state.showPersons ? 'Hide' : 'Show'} Persons
        </button>}
        {this.state.showPersons && <PersonsList
          persons={this.state.persons}
          onNameChange={this.nameChangeHandler}
          onDeletePerson={this.deletePersonHandler}
        />}
      </div>
    );
  }
}

export default App;
