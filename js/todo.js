const toDoList = document.getElementById("todo-list");
const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";
let toDos = [];

//todos 저장함수 - localStorage에 string 으로 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//todo 삭제함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //클릭한 li의 id와 같으면 toDos에서 제외 / 다르면 남기기
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  //다시 저장 함수 호출
  saveToDos();
}

//newTodo 목록 표시하기
function paintToDo(newTodo) {
  //li 태그 생성하기
  const li = document.createElement("li");
  li.id = newTodo.id;

  //span 태그 생성하기
  const span = document.createElement("span");

  //i 태그 생성하기
  const button = document.createElement("i");
  //아이콘 class 추가
  button.classList = "fa-solid fa-trash-can";
  button.id = "remove";
  //button 클릭 이벤트리스너
  button.addEventListener("click", deleteToDo);

  //input 태그 생성하기
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `cb${newTodo.id}`;

  //label 태그 생성하기
  const label = document.createElement("label");
  label.htmlFor = `cb${newTodo.id}`;

  //li안에 span,button,checkbox,label 태그 넣기
  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;

  //todoList 안에 li태그 넣기
  toDoList.appendChild(li);

  //checkbox change 취소선 이벤트
  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "#9e9e9e";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "#000000";
    }
  });
}

//버튼 클릭 함수
function handleToDoSubmit(event) {
  //todo 등록갯수 11개 제한
  if (toDos.length > 10) {
    //기본동작 막기
    event.preventDefault();
    toDoInput.value = "";
    alert("ToDoList is Full !");
  } else {
    //기본동작 막기
    event.preventDefault();

    //입력받은 값 newTodo에 저장
    const newTodo = toDoInput.value;

    //입력칸 비우기
    toDoInput.value = "";

    //newTodoObj 생성 (text, id, checked)
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    //배열에 newTodoObj push
    toDos.push(newTodoObj);

    //입력값 가지고 newTodoObj 목록 표시함수 호출
    paintToDo(newTodoObj);

    //저장함수 호출
    saveToDos();
  }
}

//toDoForm submit 이벤트리스너 추가
toDoForm.addEventListener("submit", handleToDoSubmit);

//저장된 todo 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);

//저장된 todo가 비어있지 않으면
if (savedToDos !== null) {
  //저장된 todo 배열로 파싱
  const parsedToDos = JSON.parse(savedToDos);
  //초기 toDos 배열에 이전 배열 넣기(새로운 todo로 덮어쓰기 방지)
  toDos = parsedToDos;
  //배열로 저장된 todo 각각 item에 paintToDo 함수 호출
  parsedToDos.forEach(paintToDo);
}
