import React, { Component, createRef } from 'react';

export default class UserForm extends Component {
    constructor(props) {
      super(props)
      this.userCreateRef = createRef();
    
      this.state = {}
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userCreateRef.current.value);
        this.userCreateRef.current.backgroundColor = 'yellow';
        const [,,x]= [10,20,30,40]
        console.log(x);
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label >Name:</label>
                <input type='text' ref={this.userCreateRef}/>
            </div>
            <div>
                <label >Password:</label>
                <input type='password' />
            </div>
            <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}
