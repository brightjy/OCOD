const body = document.querySelector("body");

/* 배경 이미지 개수 */
const IMG_NUMBER = 4;

/* 이미지 이벤트 핸들러 : 이미지가 성공적으로 로드됐는지 알려줌 console */
function handleImageLoad(){
    console.log("finished loading");
}

/* 이미지 보여주는 함수 */
function paintImage(imageNumber){
    const image = new Image(); // 이미지 객체 만듬
    image.src = `images/${imageNumber+1}.jpg`; // 이미지 객체에 이미지 주소 넣기 - imageNumber = randomNumber 가 0부터 시작하니까 1더해줌
    image.classList.add("backgroundImage"); // 이미지 클래스 만들기 - css 적용 시 필요
    body.prepend(image); // body 앞에 이미지 주소를 담은 이미지 객체 넣기
    /* 
        body.append(image) : body 뒤에 붙이기
        body.prepend(image) : body 앞에 붙이기
    */
    image.addEventListener("loaded", handleImageLoad);
}

/* 랜덤 숫자를 만드는 함수 */    
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); // 이미지 개수까지 랜덤으로 숫자 생성
    return number;
}

/* 실행 함수 */
function init(){
    const randomNumber = getRandom(); // 랜덤 숫자 가져와서
    paintImage(randomNumber); // 그 숫자를 매개변수로 이미지 불러오기 (이미지 이름이 숫자임)
}

init();