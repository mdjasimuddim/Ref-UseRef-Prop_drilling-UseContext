import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const {user, text}= useContext(UserContext);
    console.log(user);
  return (
    <div>
        <h2>{text}</h2>
        <p>{user.id}</p>
        <h3>{user.name}</h3>
    </div>
  )
}

export default Component4