import React from 'react';

class Buttons extends React.Component{
    render(){
        return(
            <div className='buttons'>
                <div className='row-1'>
                    <button name='clear'className='clear' onClick={e => this.props.onHandleInput(e.target.name)}>C</button>
                    <button name='/'className='operator' onClick={e => this.props.onHandleInput(e.target.name)}>/</button>
                    <button name='*'className='operator' onClick={e => this.props.onHandleInput(e.target.name)}>X</button>
                </div>
                <div className='row-2'>
                    <button name='7'className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>7</button>
                    <button name='8'className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>8</button>
                    <button name='9'className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>9</button>
                    <button name='-'className='operator' onClick={e => this.props.onHandleInput(e.target.name)}>-</button>
                </div>
                <div className='row-3'>
                    <button name='4'className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>4</button>
                    <button name='5'className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>5</button>
                    <button name='6' className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>6</button>
                    <button name='+' className='operator' onClick={e => this.props.onHandleInput(e.target.name)}>+</button>
                </div>
                <div className='row-4'>
                    <button name='1' className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>1</button>
                    <button name='2' className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>2</button>
                    <button name='3' className='numbers' onClick={e => this.props.onHandleInput(e.target.name)}>3</button>
                    <button name='=' id='equal' onClick={e => this.props.onHandleInput(e.target.name)}>=</button>
                    </div>
                <div className='row-5'>
                    <button name='0' className='numbers' id='zero' onClick={e => this.props.onHandleInput(e.target.name)}>0</button>
                    
                </div>
            </div>
        )
    }
}
export default Buttons