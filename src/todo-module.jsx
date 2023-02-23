import React from "react";
import { createReduxModule } from "hooks-for-redux";

export const [todoList, { add, remove, done }] = createReduxModule("todo", [], {
  add: (state, newTodo) => [
    ...state,
    { ...newTodo, id: state.length, title: newTodo.title, done: false },
  ],
  remove: (state, id) => state.filter((i) => i.id !== id),
  done: (state, id) =>
    state.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }),
});
