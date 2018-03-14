import React from 'react';

export const UserInfo = (props) =>
  <div>
    <h3>Name: {props.name}</h3>
    <h3>ID: {props.userid}</h3>
    <p>{props.userinfo}</p>
  </div>
