import React from 'react';
import './App.css';
import Buttons from './Buttons';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input : '',
      num: '',
      accumlator: 0,
      operator: '',
      flag: false
    }
  }
  clear = () =>{
    this.setState({
      input : '',
      num: '',
      accumlator: 0,
      operator: '',
      flag: false
    });
  }
  isNumber = (num) =>{
    let temp = parseFloat(num)
    if(isNaN(temp)){
      return false;
    }else{
      return true;
    }
  }
  isOperator = (op) =>{
    const operators = ['+','-','*','/'];
    if(operators.includes(op)){
      return true;
    }else{
      return false;
    }
  }
  calculate = (n,m,op) =>{
    let result = 0;
    if(this.isNumber(n) && this.isNumber(m) && this.isOperator(op)){
      let n1 = parseFloat(n);
      let n2 = parseFloat(m);
      switch(op){
        case '+':
          result = n1 + n2;
          break;
        case '-':
          result = n1 - n2;
          break;
        case '*':
          result = n1 * n2;
          break;
        case '/':
          result = n1 / n2;
          break;
        default:
          break;
      }
    }
    return result;
  }
  handleNumberInput = (button) => {
    let previous;
    if(this.state.num === '' && this.state.operator === ''){
      if(this.state.flag && this.state.accumlator !== 0){
        this.setState({
          input: button,
          accumlator: 0,
          flag: false
        });
      }else if(!this.state.flag && this.state.accumlator === 0){
        previous = this.state.input.toString();
        this.setState({
          input: previous.concat(button)
        });
      }
    }else if(this.state.accumlator!== 0 && this.state.operator !== ''){
      previous = this.state.input.toString();
      let temp = this.state.num;
        this.setState({
          input: previous.concat(button),
          num: temp.concat(button),
        });
    }
  }
  handleOperatorInput = (button) =>{
    let previous;
    if(this.state.input !=='' && this.state.operator === ''){
      previous = this.state.input.toString();
      this.setState({
        input: previous.concat(button),
        accumlator: previous,
        operator: button
      });
    }else if(this.state.accumlator !== 0 && this.state.num !=='' && this.state.operator !== ''){
      previous = this.state.input.toString();
      const result = this.calculate(this.state.accumlator,this.state.num,this.state.operator);
      this.setState({
        input: result.toString().concat(button),
        num: '',
        accumlator: result,
        operator: button
      });
    }
  }
  handleInput = (button) =>{
    if (this.isNumber(button)) {
      this.handleNumberInput(button)
    }else if(this.isOperator(button)){
      this.handleOperatorInput(button);
    }else if(button === "=" && this.state.accumlator !== 0 && this.state.num !== ''){
      const result = this.calculate(this.state.accumlator,this.state.num,this.state.operator);
      this.setState({
        accumlator: result,
        input: result,
        operator: '',
        num: '',
        flag: true
      });
    }else if(button === 'clear'){
      this.clear();
    }
  }
  render(){
    return(
      <div className='app'>
        <div className='middle-container'>
          <div className='input' >{this.state.input}
            <p>={this.state.accumlator}</p>
          </div>
          <Buttons onHandleInput={this.handleInput}/>
        </div>
      </div>
    )
  }
}

export default App;
