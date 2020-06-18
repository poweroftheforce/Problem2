import React, { useState } from 'react';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');

  function buttonPressed(e) {
    e.preventDefault();
    // console.log('button pressed');

    // console.log(e.target.attributes.getNamedItem('data-value'), e.currentTarget.dataset);
    let char = e.currentTarget.dataset.value;
    console.log('char', char);

    if (/[0-9]+/.test(char)) {
      console.log('char set');
      setDisplay(display !== '0' ? display + char : char);
    }

    if (/[\+\-\*\/]/.test(char) && display.toString().slice(-1) !== char) {
      console.log('op set');
      setDisplay(display + char);
    }

    if (char === 'AC') {
      console.log('setting AC');
      setDisplay('0');
    }

    if (char === 'neg') {
      console.log('setting neg');
      setDisplay(display * -1);
    }

    if (char === '%') {
      let num = parseInt(display) / 100;
      console.log('percent set', num);
      setDisplay(num.toString());
    }
  }

  function handleEquals() {
    setDisplay(math.evaluate(display));
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="display col-12">{display}</div>
        </div>
        <div className="row">
          <Button size="3" value="AC" classNames={['special']} handler={buttonPressed}></Button>
          <Button size="3" value="neg" text="+/-" classNames={['special']} handler={buttonPressed}></Button>
          <Button size="3" value="%" classNames={['special']} handler={buttonPressed}></Button>
          <Button size="3" value="/" text="&#xF7;" classNames={['function']} handler={buttonPressed}></Button>
        </div>
        <div className="row justify-content-center align-self-center">
          <Button size="3" value="7" handler={buttonPressed}></Button>
          <Button size="3" value="8" handler={buttonPressed}></Button>
          <Button size="3" value="9" handler={buttonPressed}></Button>
          <Button size="3" value="*" text="+" classNames={['function multiply']} handler={buttonPressed}></Button>
        </div>
        <div className="row">
          <Button size="3" value="4" handler={buttonPressed}></Button>
          <Button size="3" value="5" handler={buttonPressed}></Button>
          <Button size="3" value="6" handler={buttonPressed}></Button>
          <Button size="3" value="-" classNames={['function']} handler={buttonPressed}></Button>
        </div>
        <div className="row">
          <Button size="3" value="1" handler={buttonPressed}></Button>
          <Button size="3" value="2" handler={buttonPressed}></Button>
          <Button size="3" value="3" handler={buttonPressed}></Button>
          <Button size="3" value="+" classNames={['function']} handler={buttonPressed}></Button>
        </div>
        <div className="row">
          <Button size="6" value="0" handler={buttonPressed}></Button>
          <Button size="3" value="." handler={buttonPressed}></Button>
          <Button size="3" value="=" classNames={['function']} handler={handleEquals}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
