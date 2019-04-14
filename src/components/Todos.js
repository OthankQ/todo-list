import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todo = this.props.todos.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={this.props.markComplete}
          delTodo={this.props.delTodo}
        />
      );
    });
    return <div>{todo}</div>;
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
