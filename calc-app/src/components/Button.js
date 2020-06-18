import React from 'react';

function Button(props) {
  return (
    <div className={'button col-' + props.size + (props.classNames && props.classNames.length ? ' ' + props.classNames.join(' ') : '')} onClick={props.handler} data-value={props.value}>
      <div>
        {props.text ? props.text : props.value}
      </div>
    </div>
  );
}

export default Button;
