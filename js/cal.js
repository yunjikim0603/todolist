const datee = document.querySelector("#date");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const day = document.querySelector("#day");

function getCal() {
  //날짜 정보 가져오기
  const date = new Date();

  const years = date.getFullYear();
  const dates = date.getDate();

  //요일 변환
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  const days = weekday[date.getDay()];

  //달 변환
  const engMonth = new Array(12);
  engMonth[0] = "JAN";
  engMonth[1] = "FEB";
  engMonth[2] = "MAR";
  engMonth[3] = "APR";
  engMonth[4] = "MAY";
  engMonth[5] = "JUN";
  engMonth[6] = "JUL";
  engMonth[7] = "AUG";
  engMonth[8] = "SEP";
  engMonth[9] = "OCT";
  engMonth[10] = "NOV";
  engMonth[11] = "DEC";
  const months = engMonth[date.getMonth()];

  //날짜표시
  datee.innerText = `${dates}`;
  month.innerText = `${months}`;
  year.innerText = `${years}`;

  day.innerText = `${days}`;
}

getCal();
