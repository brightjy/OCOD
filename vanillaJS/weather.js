const weather = document.querySelector(".js-weather");

const API_KEY = "690241206d8a2036131c1a5bde107e18";
const COORDS = "coords";

/* 위도 경도 값으로 날씨 정보 호출 하는 함수*/
function getWeather(lat, lng){

    /*
    [Fetch API]:ES 6의 비동기 통신 방법
    fetch(url, {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }        
    }).then(function(response){
        // code...
    }).catch(function(error){
        // error
        console.log(error);
    });   
    */

    /* 날씨 API로 날씨 정보 받아오기 */
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){ // 응답을 받으면
        return response.json(); // 응답 중 json 데이터를 리턴해줘
    }).then(function(json){ // 리턴 받은 json 데이터에서
        const temperature = json.main.temp; // main.temp 정보 가져와서 temperature에 넣고
        const place = json.name; // name 정보 가져와서 place에 넣어
        weather.innerText = `${temperature} @${place}`; // .js-weather에 내용을 넣엉
    });
}

/* localStorage의
   COORDS에
   JSON 형태의 정보(여기서는 위도, 경도 좌표)를
   String 스트링 형태로 setItem(저장) 하기 */
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

/** 좌표값 가져오기에 성공할 경우 호출되는 함수 */
function handleGeoSuccess(position){ // 받아온 좌표값(position)이 매개변수
    const latitude = position.coords.latitude; // 받은 좌표값(position)에서 위도 가져옴
    const longitude = position.coords.longitude; // 받은 좌표값(position)에서 위도 가져옴
    const coordsObj = { // 가져온 위도와 경도는 obj 객체로 만듬
        /* latitude: latitude,
        longitude: longitude*/
        latitude, // name과 값이 같으면 이렇게 써도 됨
        longitude
    };
    saveCoords(coordsObj); // json 데이터를 localStorage에 저장
    getWeather(latitude, longitude); // 위도 경도 값으로 날씨 정보 호출
}

/** 좌표값 가져오기에 실패할 경우 호출되는 함수 */
function handleGeoError(){
    console.log("Cant access geo location");
}

/** 좌표값을 얻어내는 함수 */
function askForCoords(){
    /** geolocation API : 사용자의 현재 위치를 가져온다. */
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // 현재 위치 가져오기에 성공하면 ~Success 호출, 실패하면 ~Error 호출
}

/* 좌표 로딩 함수 */
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); // localStorage에서 COORDS 값을 가져온다. -> 현재 String 형태
    if(loadedCoords === null){ // 가져온 값(=기존에 저장된 값)이 없으면,
        askForCoords(); // 좌표값을 얻어내는 함수 호출
    }else{ // 가져온 값(=기존에 저장된 값)이 있으면,
        const parsedCoords = JSON.parse(loadedCoords); // 가져온 String 형태의 좌표값을 JSON 형태로 변환하여 parsedCoords에 저장
        getWeather(parsedCoords.latitude, parsedCoords.longitude); // 가져온 위도, 경도 값을 활용해 getWeather 함수 호출
    }
}

/* 실행함수 */
function init(){
    loadCoords();
}

init();