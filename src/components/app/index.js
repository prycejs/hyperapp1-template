import {h, app} from "hyperapp"
require('./app.scss');

const state = {
  count: 0
}

const actions = {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}
const view = (state, actions)  => {
  return (
    <div>
      <h1>{state.count}</h1>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
    </div>
  )
}

const App = app(state, actions, view, document.body);
export default App;


