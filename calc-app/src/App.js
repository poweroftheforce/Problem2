import React, { useState } from 'react';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');
  const [total, setTotal] = useState('0');
  const [calculating, setCalculating] = useState(false);

  function buttonPressed(e) {
    e.preventDefault();

    let char = e.currentTarget.dataset.value;

    // digits and decimal
    if (/[0-9]+/.test(char)) {
      console.log('set digits');
      setDisplay(display !== '0' ? display + char : char);
      setTotal(total !== '0' ? total + char : char);

      if (calculating) {
        console.log('calc===false', calculating)
        setDisplay(char);
        setCalculating(false);
      }
    }

    // decimal
    if (char === '.' && display.indexOf('.') === -1) {
      console.log('set decimal');
      setDisplay(display !== '0' ? display + char : char);
      setTotal(total !== '0' ? total + char : char);
    }

    // math functions
    if (/[\+\-\*\/]/.test(char) && display.toString().slice(-1) !== char) {
      console.log('math funcs');
      setTotal(total + char);
      setDisplay(math.evaluate(total));
      setCalculating(true);
    }

    // btn neg/pos
    if (char === 'neg') {
      setDisplay(display * -1);
      setTotal(total * -1);
    }

    // btn percent
    if (char === '%') {
      let num = parseInt(display) / 100;
      let tnum = parseInt(total) / 100;

      setDisplay(num.toString());
      setTotal(tnum.toString());
    }

    // btn clear
    if (char === 'AC') {
      setDisplay('0');
      setTotal('0');
    }

    console.log(total);
  }

  function handleEquals() {
    if (!/[\+\-\*\/]/.test(display.toString().slice(-1))) {
      setDisplay(math.evaluate(total));
      setTotal(math.evaluate(total));
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="display col-12">{display}</div>
          <div className="eval-line col-12">{total}</div>
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
