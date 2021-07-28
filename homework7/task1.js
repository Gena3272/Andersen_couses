/**
 * Используя https://openweathermap.org/api зарегистрироваться на сервисе
 * сделать ключ - https://www.youtube.com/watch?v=2tiVdao_E1s
 * сделать запрос, получить погоду на текущие 4 дня для своего города и так же для рандомного из списка (возвращается в ответе)
 * обработать данные и отобразить в консоль.
 */

const URL = 'https://api.openweathermap.org/data/2.5/forecast?id=710791&appid=57b8c77328cca843a450ca1f9dcf5259';
const CORRECT_STATUS = '200';

let weather = null;
let minAndMaxTemporary = null;

function showErrorMessage(errorMessage) {
    alert(errorMessage);
    throw new Error(errorMessage);
}

const fetchWeather = fetch(URL)
    .then((resp) => resp.json())
    .catch(errorMessage => showErrorMessage(errorMessage));

function getMinAndMaxObj(date) {
    weather = date;

    return date.list.reduce((acc, cv) => {
        if (!acc.min || !acc.max) {
            return {min: cv.main.temp_min, max: cv.main.temp_max};
        }

        if (cv.main.temp_min < acc.min) {
            return {...acc, min: cv.main.temp_min};
        }

        if (cv.main.temp_max > acc.max) {
            return {...acc, max: cv.main.temp_max}
        }

        return acc;
    }, {});
}


function getFormatTemporaryToCelsius(date) {
    const minAndMaxTemporaryObj = { min: Math.round(date.min - 273), max: Math.round(date.max - 273) };
    minAndMaxTemporary = minAndMaxTemporaryObj;

    return minAndMaxTemporaryObj;
}

const showTheWeather = async () => {
    const fetchWeatherSuccess = await fetchWeather.then(date => {
        if (date.cod === CORRECT_STATUS) {
            return date;
        }

        showErrorMessage(date.message);
    })

    const minAndMaxObj = getMinAndMaxObj(fetchWeatherSuccess);

    return getFormatTemporaryToCelsius(minAndMaxObj);
};

showTheWeather().then(() => {
    console.log(weather, 'response from API the weather for 4 days');
    console.log(minAndMaxTemporary, 'min and max temporary for 4 days');
});