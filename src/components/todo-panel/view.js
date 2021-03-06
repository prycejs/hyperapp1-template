import { h } from 'hyperapp'

import TodoList from './todo-list'
import TodoInput from './todo-input'
import TodoButton from './todo-button'

import './todo-panel.scss'

const ToDoPanel = () => (state, actions) => (
  <div class="todo-panel">
    <img class="logo" alt="hyperapp logo" />
    <h1 class="todo-header">HyperApp To Do Panel</h1>
    <div class="todo-container">
      <TodoList todos={state.todos}/>
      <TodoInput text={state.todoText}/>
      <TodoButton />
    </div>
  </div>
)

export default ToDoPanel

