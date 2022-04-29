import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>

  //create-react-app no puede resolver el cambio de nombre de index con el hot reload, hay que reiniciar... no tiene ninguna utilidad esto, pero odio quedarme con una duda, perdón por el TOC
);
