const API_KEY = "de83cb82dd805de4f1d2578fb4dc9013";

//getCurrentPosition() 성공시 실행 함수
function onGeoOk(position) {
  //위도
  const lat = position.coords.latitude;
  //경도
  const lon = position.coords.longitude;
  //api url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //url, json, data 추출
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //html에서 가져오기
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp}˚ ${data.weather[0].main} / `;
      city.innerText = data.name;
    });
}

//getCurrentPosition() 실패시 실행 함수
function onGeoError() {
  alert("유저의 위치를 찾을 수 없습니다.");
}

//위치정보 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
