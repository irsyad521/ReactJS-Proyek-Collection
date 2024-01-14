import axios from 'axios';

const apiKey = 'Hehe';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getLocationWeather = location => {
   const url = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;

   return axios.get(url);
};

export default getLocationWeather;
