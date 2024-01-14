import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCloud,
   faSnowflake,
   faCloudRain,
} from '@fortawesome/free-solid-svg-icons';

const Weather = ({ value, message }) => {
   const Time = () => {
      const timestamp = Date.now();
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      return formattedDate;
   };

   const WeatherIcon = value => {
      let iconComponent;
      if (value.weather && value.weather[0].main === 'Snow') {
         iconComponent = <FontAwesomeIcon icon={faSnowflake} size="5x" />;
      } else if (value.weather && value.weather[0].main === 'Clouds') {
         iconComponent = <FontAwesomeIcon icon={faCloud} size="5x" />;
      } else {
         iconComponent = <FontAwesomeIcon icon={faCloudRain} size="5x" />;
      }
      return iconComponent;
   };

   return (
      <div className="m-10 items-center flex flex-col md:flex-row md:justify-center w-1/2">
         {value.name || message == 'city not found' ? (
            message !== 'city not found' ? (
               <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                  <div className="text-md font-bold flex flex-col text-gray-900">
                     <span className="uppercase text-2xl">{value.name}</span>{' '}
                     <span className="text-gray-700 text-sm font-semibold">
                        {Time()}
                     </span>
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center">
                     {WeatherIcon(value)}
                  </div>
                  <p className="text-gray-700 mb-2">
                     {value.weather && value.weather[0].main}
                  </p>
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                     {(value.main && value.main.temp) || '30'}
                     <span className="font-normal text-gray-700 mx-1"> cº</span>
                  </div>
               </div>
            ) : (
               <div className="w-64 md:mr-20 mb-10 transition duration-500 ease-in-out transform bg-white rounded-lg hover:scale-105 cursor-pointer border flex flex-col justify-center items-center text-center p-6">
                  <div className="text-md font-bold flex flex-col text-gray-900">
                     <span className="uppercase text-2xl">{message}</span>{' '}
                  </div>
               </div>
            )
         ) : null}
      </div>
   );
};

export default Weather;
