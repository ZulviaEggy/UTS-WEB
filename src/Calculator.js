import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value1 : '',
            value2 : '',
            operation:'plus',
            value : '...',
         };
         this.handleChange1 = this.handleChange1.bind(this);
         this.handleChange2 = this.handleChange2.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleOperation = this.handleOperation.bind(this);
    }
    
        handleChange1(event) {
            this.setState({value1: event.target.value});
        }
        handleChange2(event) {
            this.setState({value2: event.target.value});
        }
        handleOperation(event){
            this.setState({operation: event.target.value});
        }

    handleSubmit(event) {
            let a = parseInt(this.state.value1);
            let b = parseInt(this.state.value2);
            let op =this.state.operation;
            if (op === 'plus'){
              this.setState({value: (a+b)});
            } else if (op === 'minus'){
              this.setState({value: (a-b)});
            } else if (op === 'pow'){
              this.setState({value: (a*b)});
            } else {
              this.setState({value: (a/b)});
            }
            event.preventDefault();
          }

    render() { 
        return (  
            <div className="info">
            <h2>Calculator</h2><br></br>
                <form onSubmit={this.handleSubmit}>
                <input type='number' value={this.state.value1} onChange={this.handleChange1}></input >
                <select onChange={this.handleOperation}>
                    <option value="plus"> + </option>
                    <option value="minus"> - </option>
                    <option value="pow"> * </option>
                    <option value="div"> / </option>
                </select>
                <input type='number' value={this.state.value2} onChange={this.handleChange2}></input> = {this.state.value}
            <br/>
            <br/>
                <input type="submit" value="Submit" />
          </form>  
            </div>
        );
    };
}
 
export default Calculator;
