# Notes from the creation of this hyperapp example

Ported the hyperapp todo implementation from 
https://github.com/citizen428/hyperapp-todo/blob/master/src/components/todo-item.js
as a component.
Note that when creating an app, the view function is
(state, actions) => (<div></div>) 
but when creating a component the view function needs to be
() => (state, actions) => (<div></div>)
so be wary of that.
This was discovered because without the correct syntax, the
ToDoPanel function gets called before there is any state defined to be passed through to it.

