const LoginForm = document.querySelector("#Login-Form")
const LoginInput = document.querySelector("#Login-Form input");
const greeting = document.querySelector("#greeting");

const HELLO_SOMEONE = "hidden";
const USERNAME_KEY = "username";

function onSubmit(event) {
    event.preventDefault();
    const username = LoginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    LoginForm.classList.add(HELLO_SOMEONE);
    paintGreetings(username);
    // 인자를 savedUsername하면 새로고침하기 전까지는 null이라고 뜬다. 함수안에 정의된 username을 사용해야 정상작동하는 듯하다.
    // 즉 함수 안에서는 인자를 사용할때 앞의 사용된 변수만 사용하기
}

function paintGreetings(username) {
    greeting.classList.remove(HELLO_SOMEONE);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    LoginForm.classList.remove(HELLO_SOMEONE);
    LoginForm.addEventListener("submit", onSubmit);
} else {
    paintGreetings(savedUsername);
}

 