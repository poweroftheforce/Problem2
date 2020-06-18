import React from 'react';

function Button(props) {
  console.log(props);
  return (
    <div className={'button col-' + props.size} onClick={props.handler}>
      <div>
        {props.value}
      </div>
    </div>
  );
}

export default Button;
