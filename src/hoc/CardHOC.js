import React from 'react';

export const CardHOC = (Comp) => (props) =>
  <div>
    <div className='header'>
      HEADER
      <button>Close</button>
    </div>
    <div className='body'>
      <Comp {...props}/>
    </div>
  </div>
