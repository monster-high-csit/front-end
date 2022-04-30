import React from 'react';
import './App.css';

import MainPage from './components/mainPage/MainPage';

// export function AddLibrary(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   document.body.appendChild(script);
// }

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
