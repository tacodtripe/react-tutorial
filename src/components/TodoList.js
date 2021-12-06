/* eslint-disable react/prefer-stateless-function,  react/state-in-constructor, react/destructuring-assignment, max-len, react/prop-types */
import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;
