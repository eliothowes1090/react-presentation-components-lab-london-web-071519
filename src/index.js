import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const handleClick = event => {
  if (event.target.innerText === "I am just happy") {
    event.target.innerText = "I am so Sad"
  } else {event.target.innerText = "I am just happy"}
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleClick} />
  </div>,
  document.getElementById('root')
);