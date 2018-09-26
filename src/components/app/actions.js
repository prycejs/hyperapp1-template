import { actions } from '../todo-panel'

const appActions = {
  ...actions,
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}

export default appActions;
