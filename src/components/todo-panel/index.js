import { h } from 'hyperapp'
import state from './state'
import actions from './actions'
import TodoList from './todo-list'
import TodoInput from './todo-input'
import TodoButton from './todo-button'

const TodoPanel = () => (state, actions) => ( 
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

export { state, actions, TodoPanel }
