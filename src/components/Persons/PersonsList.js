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

const PersonsList = (props: PersonsListProps): React.Node => props.persons.map((person: Person): React.Node => <PersonItem
    key={person.id}
    name={person.name}
    age={person.age}
    id={person.id}
    removePerson={props.onDeletePerson}
    changeName={props.onNameChange}
  />
);

export default PersonsList;
