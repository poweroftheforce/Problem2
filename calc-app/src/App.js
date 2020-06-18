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
          <div className="col-3">AC</div>
          <div className="col-3">+/-</div>
          <div className="col-3">%</div>
          <div className="col-3">&#xF7;</div>
        </div>
        <div className="row justify-content-center align-self-center">
          <Button size="3" value="7" handler={digitPressed}></Button>
          <Button size="3" value="8" handler={digitPressed}></Button>
          <Button size="3" value="9" handler={digitPressed}></Button>
          <Button size="3" value="*" handler={digitPressed}></Button>
        </div>
        <div className="row">
          <div className="col-3">4</div>
          <div className="col-3">5</div>
          <div className="col-3">6</div>
          <div className="col-3">-</div>
        </div>
        <div className="row">
          <div className="col-3">1</div>
          <div className="col-3">2</div>
          <div className="col-3">3</div>
          <div className="col-3">+</div>
        </div>
        <div className="row">
          <div className="col-6">0</div>
          <div className="col-3">.</div>
          <div className="col-3">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
