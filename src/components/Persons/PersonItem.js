/* @flow */
import * as React from 'react';

import styles from './person.css';
import withStyles from '../../HOC/withStyles';
import Aux from '../../HOC/Aux';

type PersonProps = {
  children?: () => React.Node,
  key?: string,
  name: string,
  age: number,
  id: string,
  changeName: Function,
  removePerson: Function
};

class PersonItem extends React.Component<PersonProps, {}> {
  componentWillMount() {
    console.log('[PersonItem.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[PersonItem.js] Inside componentDidMount');
  }
  render(): React.Node {
    console.log('[PersonItem.js] Inside Render Method');
    const { id, name, age, children, changeName, removePerson } = this.props;
    return (
      <Aux>
        <input type='text' onChange={(e: SyntheticInputEvent<HTMLInputElement>) => changeName(e, id)} value={name} />
        <p>'Hi, my name is {name} and I'm {age} years old!'</p>
        {children}
        <button onClick={() => removePerson(id)}>Remove</button>
      </Aux>
    );
  }
}

export default withStyles(PersonItem, styles.Person);
