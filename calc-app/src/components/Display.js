import React, { useState } from 'react';

function Display(props) {
  const [count, setCount] = useState(0);

  console.log(props);
  return (
    <div className={'col-' + props.size}>{count}</div>
  );
}

export default Display;
