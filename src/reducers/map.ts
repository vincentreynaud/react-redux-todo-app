

interface ToDoItem {
  uuid: string,
  text: string,
  done: boolean
}

interface State {
  headline: string,
  filter: string
  toDoItems: ToDoItem[]
}