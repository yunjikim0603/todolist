//이미지 배열
const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

//랜덤 이미지
const chosenImage = images[Math.floor(Math.random() * images.length)];

//자바스크립트에서 html element 생성
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

//body에 추가
document.body.appendChild(bgImage);