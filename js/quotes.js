//명언,작가 배열
const quotes = [
 {
    quote: "작은 변화가 일어날 때 진정한 삶을 살게 된다.",
    author: "레프 톨스토이",
 },
 {
    quote: "나이가 성숙을 보장하지는 않는다.",
    author: "레프 라와나 블랙웰",
 },
 {
    quote: "나만이 내 인생을 바꿀 수 있다. 아무도 날 대신해 해줄 수 없다.",
    author: "캐롤 버넷",
 },
 {
    quote: "젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
    author: "에우리피데스",
 },
 {
    quote: "성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다.",
    author: "헨리 데이비드 소로우",
 },
 {
    quote: "긴 하루 끝에 좋은 책이 기다리고 있다는 생각만으로 그날은 더 행복해진다.",
    author: "캐슬린 노리스",
 },
 {
    quote: "책 없는 방은 영혼 없는 육체와도 같다.",
    author: "키케로",
 },
 {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "알버트 아인슈타인",
 },
 {
    quote: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
    author: "세네카",
 },
 {
    quote: "품질이란 우연히 만들어지는 것이 아니라, 언제나 지적 노력의 결과이다.",
    author: "존 러스킨",
 }
]

//첫번째 span 
const quote = document.querySelector("#quote span:first-child");
//두번째 span
const author = document.querySelector("#quote span:last-child");

//랜덤 명언
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//span에 명언 표시
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;