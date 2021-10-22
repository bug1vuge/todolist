const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');
const todoRemove = document.querySelectorAll('.todo-remove');


let todoData = [];

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';

    todoData.forEach(function (item) {
        const index = todoData.indexOf(item);
        const li = document.createElement('li');

        li.classList.add('todo-item');
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' +
            '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>' +
            '</div>';
        li.setAttribute('id', index);

        if (item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener('click', function () {
            item.completed = !item.completed;
            render();
        });

        li.querySelector('.todo-remove').addEventListener('click', function () {
            if (index == li.getAttribute('id')) {
                todoData.splice(index, 1);
                render();
            }
        })
    });
};

todoControl.addEventListener('submit', function (event) {

    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        completed: false
    };

    if (headerInput.value.trim() !== '') {
        todoData.push(newToDo);
    }

    localStorage.setItem('array', JSON.stringify(todoData))

    headerInput.value = '';

    render();
});









