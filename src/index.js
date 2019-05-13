import React from 'react';
import ReactDOM from 'react-dom';



const Demo = () => {
    
      return (
        <div className="shopping-list">
          <h1>Shopping List </h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculuss</li>
          </ul>

          <div id="image"></div>
        </div>
      );
    
  }


  ReactDOM.render(<Demo/>,document.getElementById('app'));
