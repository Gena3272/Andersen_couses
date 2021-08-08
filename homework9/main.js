/**
 * Написать ToDo list, на классах(es6).
 * Для хранения данных использывать LocalStorage.
 * Должно быть: добавление, удаление и редактирование каждного item-а
 */

const ALL = 'all';
const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';
const MESSAGE_HAS_CREATED = 'The todo has already created, please change text';
const EDITED_TODO = 'You edited todo item text';

class Todo {
    initialTodo = '';

    addTodoContext = this.addTodo.bind(this);
    todoListContext = this.eventActionsCheck.bind(this);
    filterOptionContext = this.filterTodo.bind(this);
    onbeforeunloadContext = this.onBeforeUnload.bind(this);
    DOMContentLoadedContext = this.getTodos.bind(this);

    constructor() {
        this.bindEvents();
    }

    createNewTodoItem(todoInput) {
        const newTodo = document.createElement('input');
        newTodo.value = todoInput;
        newTodo.disabled = true;
        newTodo.classList.add('todo-item');
        newTodo.classList.add('ellipsis');
        return newTodo;
    }

    createCompletedButton() {
        const completedButton = document.createElement('button');
        completedButton.innerHTML = `<i class="fas fa-check"></i>`;
        completedButton.classList.add('complete-btn');
        return completedButton;
    }

    createEditButton() {
        const editButton = document.createElement('button');
        editButton.innerHTML = `<i class="far fa-edit"></i>`
        editButton.classList.add('edit-btn');
        return editButton;
    }

    createTrashButton() {
        const trashButton = document.createElement('button');
        trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
        trashButton.classList.add('trash-btn');
        return trashButton;
    }

    createElementToDo(todoInput) {
        const todoDiv = document.createElement('div');

        todoDiv.classList.add('todo');

        const newTodo = this.createNewTodoItem(todoInput);

        todoDiv.appendChild(newTodo);
        todoDiv.appendChild(this.createCompletedButton());
        todoDiv.appendChild(this.createEditButton());
        todoDiv.appendChild(this.createTrashButton());

        this.todoList.appendChild(todoDiv);
    }

    checkTodoInLocal(todoItem) {
        return this.getTodoItemsFromLocal() ? this.getTodoItemsFromLocal().includes(todoItem) : null;
    }

    addTodo(event) {
        event.preventDefault();

        const isTodoInLocal = this.checkTodoInLocal(this.todoInput.value);

        if (isTodoInLocal) {
            alert(MESSAGE_HAS_CREATED);
            return;
        }

        if (this.todoInput.value) {
            this.saveLocalTodos(this.todoInput.value);
            this.createElementToDo(this.todoInput.value);
            this.todoInput.value = '';
        }
    }

    onRemoved(item) {
        const todo = item.parentElement;
        todo.classList.add('fall');
        this.removeLocalTodos(todo);
        todo.addEventListener('transitionend', function remover() {
            todo.remove();
            todo.removeEventListener('transitionend', remover);
        });
    }

    onCompleted(item) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }

    onEdited(item) {
        const todo = item.parentElement;
        const todoItem = todo.querySelector('.todo-item');
        const isCompleted = item.parentElement.classList.contains('completed');

        if(!isCompleted) {
            todoItem.classList.toggle('edited');
            todoItem.disabled = false;
            todoItem.focus();
            this.initialTodo = todoItem.value;

            const onEditBlur = () =>  {
                const isEditedLocalStorageTodoItem = this.editedLocalStorageTodoItem(todoItem.value);

                if (!isEditedLocalStorageTodoItem) {
                    todoItem.value = this.initialTodo;
                    alert(MESSAGE_HAS_CREATED);
                } else {
                    alert(EDITED_TODO);
                }

                todoItem.disabled = true;
                todoItem.classList.remove('edited');

                todoItem.removeEventListener('blur', onEditBlur);
            }

            todoItem.addEventListener('blur', onEditBlur);
        }
    }

    eventActionsCheck(event) {

        const item = event.target;

        if (item.classList[0] === 'trash-btn') {
            this.onRemoved(item);
        }

        if (item.classList[0] === 'complete-btn') {
            this.onCompleted(item);
        }

        if (item.classList[0] === 'edit-btn') {
            this.onEdited(item);
        }
    }

    editedLocalStorageTodoItem(todoItem) {
        let todos = this.getTodoItemsFromLocal();

        const isTodoInLocal = this.checkTodoInLocal(todoItem);

        if (isTodoInLocal) {
            return false;
        }

        const editedTodoItem = todos.map(todo => {
            return todo === this.initialTodo ? todoItem : todo;
        });

        localStorage.setItem('todos', JSON.stringify(editedTodoItem));

        return true;
    }


    filterTodo(event) {
        const todos = this.todoList.childNodes;

        todos.forEach((todo) => {
            switch (event.target.value) {
                case ALL:
                    todo.style.display = 'flex';
                    break;
                case COMPLETED:
                    console.log('works second')
                    todo.style.display = todo.classList.contains(COMPLETED) ? 'flex' : 'none';
                    break;
                case UNCOMPLETED:
                    console.log('works third')
                    todo.style.display = !todo.classList.contains(COMPLETED) ? 'flex' : 'none';
                    break;
            }
        });
    }

    saveLocalTodos(todo) {
        if (todo) {
            let todos = this.getTodoItemsFromLocal();

            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }

    getTodos() {
        this.getTodoItemsFromLocal().forEach((todo) => this.createElementToDo(todo));
    }

    getTodoItemsFromLocal() {
        return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    }

    removeLocalTodos(todo) {
        const todoIndex = todo.children[0].innerText;
        const todos = this.getTodoItemsFromLocal();

        todos.splice(todos.indexOf(todoIndex), 1);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    bindEvents() {
        this.todoInput = document.querySelector('.todo-input');
        this.todoButton = document.querySelector('.todo-button');
        this.todoList = document.querySelector('.todo-list');
        this.filterOption = document.querySelector('.filter-todo');

        this.todoButton.addEventListener('click', this.addTodoContext);
        this.todoList.addEventListener('click', this.todoListContext);
        this.filterOption.addEventListener('change', this.filterOptionContext);
        document.addEventListener('DOMContentLoaded', this.DOMContentLoadedContext);
        window.addEventListener('onbeforeunload', this.onbeforeunloadContext);
    }

    onBeforeUnload() {
        this.todoButton.removeEventListener('click', this.addTodoContext);
        this.todoList.removeEventListener('click', this.todoListContext);
        this.filterOption.removeEventListener('click', this.filterOptionContext);
        document.removeEventListener('DOMContentLoaded', this.DOMContentLoadedContext);
        window.removeEventListener('onbeforeunload', this.onbeforeunloadContext);
    }
}

const todo = new Todo();