import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  function digitPressed(e) {
    e.stopPropagation();
    console.log('digitPressed was called');
    setCount('ok');
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Display value="display"></Display>
        </div>
        <div className="row">
          <Button size="3" value="AC" classNames={['special']} handler={digitPressed}></Button>
          <Button size="3" value="+/-" classNames={['special']} handler={digitPressed}></Button>
          <Button size="3" value="%" classNames={['special']} handler={digitPressed}></Button>
          <Button size="3" value="&#xF7;" classNames={['function']} handler={digitPressed}></Button>
        </div>
        <div className="row justify-content-center align-self-center">
          <Button size="3" value="7" handler={digitPressed}></Button>
          <Button size="3" value="8" handler={digitPressed}></Button>
          <Button size="3" value="9" handler={digitPressed}></Button>
          <Button size="3" value="*" classNames={['function']} handler={digitPressed}></Button>
        </div>
        <div className="row">
          <Button size="3" value="4" handler={digitPressed}></Button>
          <Button size="3" value="5" handler={digitPressed}></Button>
          <Button size="3" value="6" handler={digitPressed}></Button>
          <Button size="3" value="-" classNames={['function']} handler={digitPressed}></Button>
        </div>
        <div className="row">
          <Button size="3" value="1" handler={digitPressed}></Button>
          <Button size="3" value="2" handler={digitPressed}></Button>
          <Button size="3" value="3" handler={digitPressed}></Button>
          <Button size="3" value="+" classNames={['function']} handler={digitPressed}></Button>
        </div>
        <div className="row">
          <Button size="6" value="0" handler={digitPressed}></Button>
          <Button size="3" value="." handler={digitPressed}></Button>
          <Button size="3" value="=" classNames={['function']} handler={digitPressed}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
