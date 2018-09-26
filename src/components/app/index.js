import {h, app} from "hyperapp"
import state from "./state"
import actions from "./actions"
import view from "./view"

const App = app(state, actions, view, document.body);
export default App;


