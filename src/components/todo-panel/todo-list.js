import { h } from 'hyperapp'
import TodoItem from './todo-item'

const TodoListView = ({ todos }) => (_state, actions) => (
  <div class="todo-list">
    {
      todos.map((todo, idx) => (
        <TodoItem idx={idx} todo={todo}/>
      ))  
    }
  </div>
)

export default TodoListView
