import React from 'react';

export default function Footer (props)
{
  return (
    <div>
      <header>
        <div> { props.name } </div>
        <strong>{ props.sobrenome }</strong>
      </header>
    </div>
    )
}