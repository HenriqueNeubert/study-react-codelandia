import React from 'react';

export default function Search (props)
{
  return (
    <div id='inputSearch'>
      <input type="text" className={ props.width } placeholder={ props.placeholder } />
    </div>
    )
} 