import { h } from 'hyperapp'
import { TodoPanel } from '../todo-panel'

import './app.scss'


const view = (state, actions)  => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
      <TodoPanel />
    </div>
  )
}

export default view


