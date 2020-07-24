const weather = document.querySelector(".js-weather");

const API_KEY = "690241206d8a2036131c1a5bde107e18";
const COORDS = "coords";

/* ���� �浵 ������ ���� ���� ȣ�� �ϴ� �Լ�*/
function getWeather(lat, lng){

    /*
    [Fetch API]:ES 6�� �񵿱� ��� ���
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

    /* ���� API�� ���� ���� �޾ƿ��� */
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){ // ������ ������
        return response.json(); // ���� �� json �����͸� ��������
    }).then(function(json){ // ���� ���� json �����Ϳ���
        const temperature = json.main.temp; // main.temp ���� �����ͼ� temperature�� �ְ�
        const place = json.name; // name ���� �����ͼ� place�� �־�
        weather.innerText = `${temperature} @${place}`; // .js-weather�� ������ �־�
    });
}

/* localStorage��
   COORDS��
   JSON ������ ����(���⼭�� ����, �浵 ��ǥ)��
   String ��Ʈ�� ���·� setItem(����) �ϱ� */
function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

/** ��ǥ�� �������⿡ ������ ��� ȣ��Ǵ� �Լ� */
function handleGeoSuccess(position){ // �޾ƿ� ��ǥ��(position)�� �Ű�����
    const latitude = position.coords.latitude; // ���� ��ǥ��(position)���� ���� ������
    const longitude = position.coords.longitude; // ���� ��ǥ��(position)���� ���� ������
    const coordsObj = { // ������ ������ �浵�� obj ��ü�� ����
        /* latitude: latitude,
        longitude: longitude*/
        latitude, // name�� ���� ������ �̷��� �ᵵ ��
        longitude
    };
    saveCoords(coordsObj); // json �����͸� localStorage�� ����
    getWeather(latitude, longitude); // ���� �浵 ������ ���� ���� ȣ��
}

/** ��ǥ�� �������⿡ ������ ��� ȣ��Ǵ� �Լ� */
function handleGeoError(){
    console.log("Cant access geo location");
}

/** ��ǥ���� ���� �Լ� */
function askForCoords(){
    /** geolocation API : ������� ���� ��ġ�� �����´�. */
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError); // ���� ��ġ �������⿡ �����ϸ� ~Success ȣ��, �����ϸ� ~Error ȣ��
}

/* ��ǥ �ε� �Լ� */
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS); // localStorage���� COORDS ���� �����´�. -> ���� String ����
    if(loadedCoords === null){ // ������ ��(=������ ����� ��)�� ������,
        askForCoords(); // ��ǥ���� ���� �Լ� ȣ��
    }else{ // ������ ��(=������ ����� ��)�� ������,
        const parsedCoords = JSON.parse(loadedCoords); // ������ String ������ ��ǥ���� JSON ���·� ��ȯ�Ͽ� parsedCoords�� ����
        getWeather(parsedCoords.latitude, parsedCoords.longitude); // ������ ����, �浵 ���� Ȱ���� getWeather �Լ� ȣ��
    }
}

/* �����Լ� */
function init(){
    loadCoords();
}

init();