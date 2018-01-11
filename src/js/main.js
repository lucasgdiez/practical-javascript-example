//v10 req

//there should be a way to create delete buttons
//every todo should have a delete button next to them
//each li needs to have an id that stores the todo position
//delete button should have access to the position mentioned above
//clickin the delete button should update the todoList.todos array and update the DOM

//FIX
//ADD TODO ADDS ANYWAY IF THERE'S NOTHING ON IT HES CRAZY

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];

    todo.completed = !todo.completed;
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
      //goes through every item in totalTodos.completed and makes them false
      for(var index = 0; index < totalTodos; index++) {
        this.todos[index].completed = false;
      }
    } else {
        //goes through every item in totalTodos.completed and makes them true
        for(var position = 0; position < totalTodos; position++) {
          this.todos[position].completed = true;
        }
    }
  }
};

var handlers = {
  addTodo: function() {
    var todoText = document.getElementById('addTodoTextInput');
    
    todoList.addTodo(todoText.value);

    todoText.value = '';
    view.displayTodos();

  },
  changeTodo: function () {
    handlers.checkListStatus();
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');

    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';

    view.displayTodos();
  },
  deleteTodo: function() {
    handlers.checkListStatus();
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
   
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);

    deleteTodoPositionInput.value = '';

    view.displayTodos();
  },
  toggleCompleted: function() {
    handlers.checkListStatus();
    var toggleCompletedTodoPosition = document.getElementById('toggleCompletedTodoPosition');

    todoList.toggleCompleted(toggleCompletedTodoPosition.valueAsNumber);
  
    toggleCompletedTodoPosition.value = '';

    view.displayTodos();
  },
  toggleAll: function() {
    handlers.checkListStatus();
    todoList.toggleAll();
    view.displayTodos();
  },
  checkListStatus: function() {
    var displayStatusText = document.querySelector('p');
    var initialStatus = 0;
    var totalTodos = todoList.todos.length;

    if(totalTodos === initialStatus) {
      displayStatusText.textContent = 'Your todo list is empty!';
    } else {
      displayStatusText.textContent = '';
    }
  }
};

//controls render methods to the ui
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    //resets so it doesn't add a new ul every time we call it
    todosUl.innerHTML = '';
    //goes through every todo inside the array and creates a new li
    //and appends it to the ul
    for(var i = 0; i < todoList.todos.length; i++) {
      var todosLi = document.createElement('li');
      //if statement checks false/true of items printing status of said item + text
      
      //BUG DISABLE BUTTON IF NO CHARACTERS IN FIELD
      if (todoList.todos[i].completed === false) {
        todosLi.textContent = '() ' + todoList.todos[i].todoText;
      } else {
        todosLi.textContent = '(x) ' + todoList.todos[i].todoText;
      }
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
     }
    },
    createDeleteButton: function () {
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';

      return deleteButton;
  }
};

//eslint doesn't let you compile if you're not using the variables declared
console.log('test', todoList);
console.log(handlers, view);