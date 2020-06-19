import React from 'react';

function Button(props) {
  return (
    <div className={'col-' + props.size}>
      <div id={props.id} className={'button' + (props.classNames && props.classNames.length ? ' ' + props.classNames.join(' ') : '')} onClick={props.handler} data-value={props.value}>
        <p>{props.text ? props.text : props.value}</p>
      </div>
    </div>
  );
}

export default Button;
