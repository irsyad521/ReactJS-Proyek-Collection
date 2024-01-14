import Input from './components/Input';
import Weather from './components/Weather';
import getLocationWeather from './api';
import { useState } from 'react';

const App = () => {
   const [value, setValue] = useState({});
   const search = location => {
      getLocationWeather(location)
         .then(response => {
            return setValue(response.data);
         })
         .catch(error => {
            setValue(error.response.data);
         });
   };

   return (
      <div
         className="min-h-screen flex justify-center items-center flex-col bg-center bg-cover min-w-max"
         style={{
            backgroundImage: 'url("../images/background.jpg")',
            backgroundSize: 'cover',
         }}
      >
         <Input search={search} />
         <Weather value={value} message={value.message} />
      </div>
   );
};

export default App;
