//v6 req 
//make method toggleAll => if everything true => make everything false - done
//^otherwise make everything false

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
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //checks completed todos, if true increments counter of completedTodos by 1
    for(var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }

    //checks if the length of completedTodos equals the total of todos
    if(completedTodos === totalTodos) {
      for(var d = 0; d < totalTodos; d++) {
        this.todos[d].completed = false;
      }
    this.displayTodos();
    }
  }
};

console.log(todoList);