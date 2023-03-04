//시계 가져오기
const clock = document.querySelector("#clock");

//시계 표시 함수
function getClock() {
  //시간정보 가져오기
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //시간 표시
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//즉시 한번 실행
getClock();
//1초에 한번씩 반복하기
setInterval(getClock, 1000);
