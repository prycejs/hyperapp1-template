const actions = {
  add: () => state => {
    if (!state.todoText)
      return state;
    return {
      todoText: "",
      todos: [...state.todos, { id: state.nextId, text: state.todoText }],
      nextId: state.nextId + 1
    }
  },
  updateText: text => state => ({ todoText: text }),
  remove: idx => state => ({
    todos: state.todos.filter((el, i) => i !== idx)
  })
}

export default actions
