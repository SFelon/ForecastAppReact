import axios from 'axios';

const API_KEY = '0e3485d36f07a78cd84bec544bec1e2e';
const UNITS = 'metric';
const LANG = 'pl';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?units=${UNITS}&lang=${LANG}&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},pl`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}