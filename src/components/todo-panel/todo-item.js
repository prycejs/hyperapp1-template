import { h } from 'hyperapp'

const TodoItemView = ({ idx, todo }) => (_state, actions) => (
  <div class="todo-item" key={todo.id}>
    <p class="todo-item-text">{todo.text}</p>
    <div class="todo-item-delete" onclick={e => actions.remove(idx)}>
      -
    </div>
  </div>
)

export default TodoItemView
