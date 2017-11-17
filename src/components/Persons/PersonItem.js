/* @flow */
import * as React from 'react';

type PersonProps = {
  children?: React.Element<any>,
  key?: string,
  name: string,
  age: number,
  id: string,
  onNameChange: Function,
  removePerson: Function
};

const PersonItem = (props: PersonProps) => {
  return (
    <div className='Person'>
      <input type='text' onChange={(e: SyntheticInputEvent<HTMLInputElement>) => props.onNameChange(e, props.id)} value={props.name} />
      <p>'Hi, my name is {props.name} and I'm {props.age} years old!'</p>
      {props.children}
      <button onClick={() => props.removePerson(props.id)}>Remove</button>
    </div>
  );
};

export default PersonItem;
