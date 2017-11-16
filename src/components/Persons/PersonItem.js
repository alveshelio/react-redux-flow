/* @flow */
import * as React from 'react';

type PersonProps = {
  children?: React.Node,
  name: string,
  age: number,
  id: string,
  index: number,
  onNameChange: Function,
  removePerson: Function,
}

const PersonItem = (props: PersonProps) => {
  console.log('props', props.id);
  return (
    <div className='Person'>
      <input type='text' onChange={e => props.onNameChange(e, props.id)} value={props.name} />
      <p>'Hi, my name is {props.name} and I'm {props.age} years old!'</p>
      {props.children}
      <button onClick={() => props.removePerson(props.id)}>Remove</button>
    </div>
  );
}

export default PersonItem;
