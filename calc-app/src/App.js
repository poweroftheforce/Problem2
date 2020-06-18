import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">display</div>
        </div>
        <div className="row">
          <div className="col-3">AC</div>
          <div className="col-3">+/-</div>
          <div className="col-3">%</div>
          <div className="col-3">&#xF7;</div>
        </div>
        <div className="row">
          <div className="col-3">7</div>
          <div className="col-3">8</div>
          <div className="col-3">9</div>
          <div className="col-3">*</div>
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
