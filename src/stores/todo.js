import { writable, readable } from 'svelte/store'

class Todo {
  // get todoList
  constructor() {
    this.todoList = writable([])
    this.add = this.add.bind(this)
    this.reset = this.reset.bind(this)
    this.modify = this.modify.bind(this)
    this.remove = this.remove.bind(this)
  }
  add() {
    console.log('this ', this);
    this.todoList.update(list => [...(list), {
      id: `${Date.now()}`,
      text: ''
    }])
  }
  reset() {
    this.todoList.set([])
  }
  modify(todo) {
    this.todoList.update(list => {
      const target = list.find(item => todo.id === item.id)
      target.text = todo.text;
      console.log('todo ', todo, list.slice(0));
      return list
    })
  }
  remove(todo) {
    this.todoList.update(list => {
      const idx = list.findIndex(item => todo.id === item.id)
      console.log('remove idx ', idx, todo, list)
      console.log('mopdif ', list.slice(0));
      list.splice(idx, 1, null);
      return list
    })
  }
}
export default Todo;