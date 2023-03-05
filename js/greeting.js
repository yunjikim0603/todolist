const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logoutBtn = document.querySelector("#logout");
const todoSection = document.querySelector("#todo_section");

const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

//로그인 submit 함수
function onLoginSubmit(event) {
  //submit 기본동작 중단
  event.preventDefault();
  //loginForm 숨기기
  loginForm.classList.add(HIDDEN_CALSSNAME);
  //username 저장
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //h1 표시
  paintGreetings(username);
}

//h1 greeting 표시 함수
function paintGreetings(username) {
  greeting.innerText = `Hello ${username} !`;
  greeting.classList.remove(HIDDEN_CALSSNAME);
  logoutBtn.classList.remove(HIDDEN_CALSSNAME);
  todoSection.classList.remove(HIDDEN_CALSSNAME);
}

//저장된 username 확인
const savedUsername = localStorage.getItem(USERNAME_KEY);
//username이 비어있으면
if (savedUsername === null) {
  //loginForm 표시
  loginForm.classList.remove(HIDDEN_CALSSNAME);
  //비어있지 않으면
} else {
  //username 과 content 표시
  paintGreetings(savedUsername);
}

//로그아웃 함수
function userLogout() {
  //저장된 username 확인
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  //username이 비어있지 않으면 (로그인상태)
  if (savedUsername !== null) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    //로컬스토리지 초기화 후 페이지 새로고침
    window.location.reload();
  }
}

//로그인 submit 이벤트리스너
loginForm.addEventListener("submit", onLoginSubmit);

//로그아웃 click 이벤트리스너
logoutBtn.addEventListener("click", userLogout);
