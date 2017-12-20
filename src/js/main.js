//v5 req 
//displayTodo should show todoText - done
//displayTodo should tell you if todos[] is empty - done
//displayTodo should show completed - done

var todoList = {
  todos: [],
  displayTodos: function () {
    if (this.todos.length === 0) {
      console.log("Your todo list is empty!");
    } else {
        console.log("My todos: ");
        for(var i = 0; i < this.todos.length; i++) {
          if(this.todos[i].completed === true) {
            console.log(this.todos[i].todoText, "(x)");
          } else {
            console.log(this.todos[i].todoText, "()");
          }
        }
      }  
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