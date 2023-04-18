const todoForm = document.querySelector("#todo-Form");
const todoInput= todoForm.querySelector("input");
const todoList = document.querySelector("#todo-List");

const TODOS_KEY = "todos";

let todos = []; 

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();   
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // 윗 코드에서 작동하지 않는데 오류코드는 나오지 않는 이유: todo.id는 number이고 li.id는 string이기 때문 그래서 parseInt()를 붙여 string을 number로 바꿔준다.
    // 또한 !=, == 을 사용하면 문자와 숫자형식을 맞추지 않아도 정상작동 한다. 하지만 위와같은 방법이 오류상 안전하다고 한다.

    // 추가로 아래에서 Date.now()를 통해서 id깂을 숫자로 받았는데 여기서 string으로 변환된 이유는 li는 DOM을 건드리는데 DOM의 id는 문자배열이라고 한다.
    // 참고 사이트 https://developer.mozilla.org/ko/docs/Web/API/Document/getElementById js:25 const li = document.createElement("li");이부분해당
    saveTodos();
    // 또한 console상에서만 array에서 지운것이므로 localStorage에다가도 저장을 새로 해줘야 한다.
}

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    // html li에게 직접적으로 id를 입력해주기 위해 나중에 선택을 위한 작업
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    // .text를 붙여주는 이유는 아래함수 newTodoObj변수를 object로 선언했기에 일반 string이 아니어서 화면에 글자가 아닌 object라고 송출된다.
    // 그래서 .text를 붙여줘야 object를 string으로 변화시켜준다는 느낌으로 보면된다.
    const button = document.createElement("button");
    button.innerText = "×";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    // 위에서 newTodo로 이미 변수에 저장이 되어 아랫코드는 단지 시각적으로만 없애는 것이기에 newTodo를 사용하면 안된다.
    // newTodo = "";를 사용하게 되면 저장된것은 "";이다로 해석되어 오류가 생긴다.
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 