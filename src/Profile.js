import React, { Component } from 'react';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';

class profile extends Component {
  constructor(props){
    super(props);
    }
    notify(){
      [
        'top-right', 
      ].forEach(position => {
      toast.notify('Hello, Zulvia Eggy', {
        position
      });
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.notify}>Press Me!</button>
        <br></br>
        <br></br>
        <p>{this.props.nama}</p>
        <img src="Doraemon.png" width="250"/>
      </div>
    );
  }   
} 

export default profile;
