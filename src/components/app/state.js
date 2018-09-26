import { state } from '../todo-panel'


const appState = {
  ...state,
  count: 0
}

window.initialAppState = appState;

export default appState;
