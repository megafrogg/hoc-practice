import React from 'react';

export const ListItemHOC = (Comp) => (props) =>
  <li className='ListItem'>
    <Comp {...props} />
  </li>
