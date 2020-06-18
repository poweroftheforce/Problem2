import React from 'react';

function Button(props) {
  console.log(props);
  return (
    <div className={'button col-' + props.size + (props.classNames && props.classNames.length ? ' ' + props.classNames.join(' ') : '')} onClick={props.handler}>
      <div>
        {props.value}
      </div>
    </div>
  );
}

export default Button;
