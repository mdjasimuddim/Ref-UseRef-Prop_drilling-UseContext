import React, { useRef } from 'react';

const UseRef = () => {
    const useRefName = useRef();
    const useRefPassword = useRef();
    const handleSubmit = (event) => {
        console.log('submitted');
        event.preventDefault();
        const userName = useRefName.current.value;
        const usePassword = useRefPassword.current.value;
        console.log({userName, usePassword})
        useRefName.current.style.color = 'red';
        // useRefExample.current.style.color = 'red';
        // console.log(useRefExample.current.value);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type='text' id='name' ref = {useRefName} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' id='password' ref = {useRefPassword} />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default UseRef