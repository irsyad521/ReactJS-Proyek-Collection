import axios from 'axios';

const apiKey = 'fb26fa0a32c6272b5c5c3e244232528d';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

const getLocationWeather = location => {
   const url = `${baseUrl}?q=${location}&appid=${apiKey}&units=metric`;

   return axios.get(url);
};

export default getLocationWeather;
