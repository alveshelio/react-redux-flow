import * as React from 'react';

import './person.css';
import PersonItem from './PersonItem';

type Person = {
  name: string,
  age: number,
  id: string,
};
type PersonsListProps = Array<Person>;

type PersonsListState = {
  persons: Array<Person>,
};


class PersonsList extends React.Component<React.Node, PersonsListState, PersonsListProps> {
  state = {
    persons: [
      { id: 'abc', name: 'Helio', age: 41 },
      { id: 'def', name: 'Julie', age: 45 },
      { id: 'ghi', name: 'Evan', age: 9 },
    ]
  };

  nameChangeHandler = (e: SyntheticInputEvent<HTMLInputElement>, id: string) => {
    const persons = [...this.state.persons];
    const personIndex = persons.findIndex(p => p.id === id);
    persons[personIndex].name = e.target.value;
    this.setState(() => {
      return {
        persons
      }
    });
  };

  deletePersonHandler = (id: string) => {
    const persons = [...this.state.persons];
    const filteredPersons = persons.filter(person => person.id !== id);
    this.setState(() => ({ persons: filteredPersons }));
  };

  render() {
    return (<div className='PersonsList'>
      {this.state.persons.map((person, index) => <PersonItem
        key={index}
        name={person.name}
        age={person.age}
        id={person.id}
        removePerson={this.deletePersonHandler}
        onNameChange={this.nameChangeHandler}
      />)}
    </div>);
  }
}

export default PersonsList;
