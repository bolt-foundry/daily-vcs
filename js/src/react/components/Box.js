import * as React from 'react';

export function Box(props) {
  return (
    <box
      id={props.id}
      layout={props.layout}
      style={props.style || {}}
      transform={props.transform || {}}
    >
      {props.children}
    </box>
  )
}
