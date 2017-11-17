/* @flow */
import * as React from 'react';

import styles from './person.css';

type PersonProps = {
  children?: () => React.Node,
  key?: string,
  name: string,
  age: number,
  id: string,
  onNameChange: Function,
  removePerson: Function
};

const PersonItem = (props: PersonProps): React.Node => {
  return (
    <div className={styles.Person}>
      <input type='text' onChange={(e: SyntheticInputEvent<>) => props.onNameChange(e, props.id)} value={props.name} />
      <p>'Hi, my name is {props.name} and I'm {props.age} years old!'</p>
      {props.children}
      <button onClick={() => props.removePerson(props.id)}>Remove</button>
    </div>
  );
};

export default PersonItem;
