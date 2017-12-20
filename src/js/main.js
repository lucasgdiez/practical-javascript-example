//v5 req 
//displayTodo should show todoText
//displayTodo should tell you if todos[] is empty
//displayTodo should show completed

var todoList = {
  todos: [],
  displayTodos: function () {
    console.log("My todos", this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

console.log(todoList);