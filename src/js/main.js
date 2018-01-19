//v10 req

//todoList.toggleAll should use forEach - done
//view.displayTodos should use forEach - done

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

    //checks completed todos, if true increments counter completedTodos by 1
    //in a refined way :emojiwithglasses:

    this.todos.forEach(function(todo) {
      if(todo.completed === true) {
        completedTodos++;
      }
    });

    //checks if the length of completedTodos equals the total of todos
    if(completedTodos === totalTodos) {
      //goes through every item in totalTodos.completed and makes them false
      this.todos.forEach(function(todo) {
        todo.completed = false;
      })
    } else {
      this.todos.forEach(function(todo) {
        //goes through every item in totalTodos.completed and makes them true
        todo.completed = true;
      })
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
  deleteTodo: function(position) {
    handlers.checkListStatus();

    todoList.deleteTodo(position);

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
    todoList.todos.forEach(function(todo, position) {
      var todosLi = document.createElement('li');
      //if statement checks false/true of items printing status of said item + text
      
      //BUG DISABLE BUTTON IF NO CHARACTERS IN FIELD
      if (todo.completed === false) {
        todosLi.textContent = '() ' + todo.todoText;
      } else {
        todosLi.textContent = '(x) ' + todo.todoText;
      }

      todosLi.id = position;
      todosLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todosLi);
    }, this)
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector('ul');

    todosUl.addEventListener('click', function(event) {
      var elementClicked = event.target;

      if(elementClicked.className === 'delete-button') {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();


//eslint doesn't let you compile if you're not using the variables declared
console.log('test', todoList);
console.log(handlers, view);