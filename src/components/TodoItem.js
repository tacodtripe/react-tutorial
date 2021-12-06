/* eslint-disable react/prefer-stateless-function,  react/state-in-constructor, react/destructuring-assignment, max-len, react/prop-types */
import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}

export default TodoItem;
