import { h } from 'hyperapp'

const TodoButtonView = () => (_state, actions) => (
  <div class="todo-add" onclick={ e => actions.add() } >
    +
  </div>
)

export default TodoButtonView;
