import React, { useState, useCallback } from 'react';
import useEventListener from './event-listener';
import Button from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import * as math from 'mathjs';

function App() {
  const [display, setDisplay] = useState('0');
  const [total, setTotal] = useState('0');
  const [calculating, setCalculating] = useState(false);
  const [equated, setEquated] = useState(false);
  const DIGITS = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
  const ENTER = 13;
  const PERCENT = 53;
  const MULTIPLY = 56;
  const EQUALS = 187;
  const MINUS = 189;
  const DECIMAL = 190;
  const DIVIDE = 191;
  const handleKeydown = useCallback(
    (e) => {
      if (DIGITS.includes(e.keyCode)) {
        handleDigits(DIGITS.indexOf(e.keyCode).toString());
      }

      if (e.keyCode === DECIMAL) {
        handleDecimal();
      }

      if (e.keyCode === MINUS) {
        handleOperation('-');
      }

      if (e.keyCode === DIVIDE) {
        handleOperation('/');
      }

      if (e.shiftKey && e.keyCode === PERCENT) {
        handlePercent();
      }

      if (e.shiftKey && e.keyCode === MULTIPLY) {
        handleOperation('*');
      }

      if (e.shiftKey && e.keyCode === EQUALS) {
        handleOperation('+');
      } else if (e.keyCode == EQUALS) {
        handleEquals();
      }

      if (e.keyCode === ENTER) {
        handleEquals();
      }
    }
  );

  function handleDigits(digit) {
    setDisplay(display !== '0' ? display + digit : digit);
    // setTotal(total !== '0' ? total + digit : digit);

    if (calculating) {
      setDisplay(digit);
      setCalculating(false);
    }

    if (equated) {
      setDisplay(digit);
      setTotal(digit);
      setEquated(false);
    }
  }

  function handleDecimal() {
    setDisplay(display !== '0' ? display + '.' : '.');
    setTotal(total !== '0' ? total + '.' : '.');
  }

  // handle operation (+, -, *, /)
  function handleOperation(func) {
    let sum = display + func;

    setTotal(sum);
    // setDisplay(math.evaluate(sum));
    setCalculating(true);
    setEquated(false);
  }

  function handlePercent() {
    let num = parseInt(display) / 100;
    let tnum = parseInt(total) / 100;

    setDisplay(num.toString());
    setTotal(tnum.toString());
  }

  function buttonPressed(e) {
    e.preventDefault();

    let char = e.currentTarget.dataset.value;
    let text = e.target.innerText;
    let btnClear = document.querySelector('#btn-clear p');

    // digits
    if (/[0-9]+/.test(char)) {
      handleDigits(char);
      btnClear.innerText = 'C';
    }

    // decimal
    if (char === '.' && display.indexOf('.') === -1) {
      handleDecimal();
      btnClear.innerText = 'C';
    }

    // math functions
    if (/[\+\-\*\/]/.test(char)) {
      handleOperation(char);
    }

    // btn neg/pos
    if (char === 'neg') {
      setDisplay(display * -1);
      setTotal(total * -1);
    }

    // btn percent
    if (char === '%') {
      handlePercent();
    }

    // btn clear
    if (char === 'AC') {
      if (text === 'C') {
        setDisplay('0');
        btnClear.innerText = 'AC';
      } else {
        setDisplay('0');
        setTotal('0');
      }
    }
  }

  function handleEquals() {
    if (!/[\+\-\*\/]/.test(display.toString().slice(-1))) {
      let sum = math.evaluate(total + display);

      setTotal(sum);
      setDisplay(sum);
      setEquated(true);
    }
  }

  useEventListener('keydown', handleKeydown);

  return (
    <div className="App">
      <div className="container new">
        <div className="row">
          <div className="display col-12">{display}</div>
          <div className="eval-line col-12">{total}</div>
        </div>
        <div className="row">
          <Button size="3" value="AC" id="btn-clear" classNames={['special']} handler={buttonPressed}></Button>
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
