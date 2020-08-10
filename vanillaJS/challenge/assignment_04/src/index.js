// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const selectElement = document.querySelector('.js-select');
const USER_COUNTRY = "savedCountry";


function handleSelect(event)
{
    const country = event.target.value;
    paintCountry(country);
    saveCountry(country);
}

function whenSelected() 
{
    selectElement.addEventListener('change', handleSelect);
}

function saveCountry(text)
{
    localStorage.setItem(USER_COUNTRY, text);
}

function paintCountry(text) 
{
    const result = document.querySelector('.result');
    result.textContent = `Oh, You are from ${text}`;
}

function loadCountry()
{
    const savedCountry = localStorage.getItem(USER_COUNTRY);

    if (savedCountry === null)
    {
        whenSelected();
    }else
    {
        paintCountry(savedCountry);
    }
}

function init()
{
    loadCountry();
}

init();