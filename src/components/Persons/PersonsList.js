/* @flow */
import * as React from 'react';

import PersonItem from './PersonItem';

type Person = {
  name: string,
  age: number,
  id: string
};

type PersonsListProps = {
  persons: Array<Person>,
  onNameChange: Function,
  onDeletePerson: Function
};

type PersonsListState = {};

class PersonsList extends React.PureComponent<PersonsListProps, PersonsListState> {
  componentWillMount() {
    console.log('[PersonsList.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[PersonsList.js] Inside componentDidMount');
  }

  componentWillReceiveProps(nextProps: PersonsListProps) {
    console.log('[UPDATE PersonsList.js] Inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps: PersonsListProps, nextState: PersonsListState): boolean {
  //   console.log('[UPDATE PersonsList.js] Inside shouldComponentUpdate', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.onNameChange !== this.props.onNameChange ||
  //     nextProps.onDeletePerson !== this.props.onDeletePerson;
  // }

  componentWillUpdate(nextProps: PersonsListProps, nextState: PersonsListState) {
    console.log('[UPDATE PersonsList.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE PersonsList.js] Inside componentDidUpdate');
  }

  render(): React.Node {
    console.log('[PersonsList.js] Inside Render Method');
    const { persons, onNameChange, onDeletePerson } = this.props;
    return (
      persons.map((person: Person): React.Node => <PersonItem
          key={person.id}
          name={person.name}
          age={person.age}
          id={person.id}
          removePerson={onDeletePerson}
          changeName={onNameChange}
        />
      )
    );
  }
}

export default PersonsList;
