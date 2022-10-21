import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Search (props)
{
  return (
    <div id='inputSearch'>
      <FontAwesomeIcon icon={faEnvelope} />
      <input type="text" className={ props.width } placeholder={ props.placeholder } />
    </div>
    )
}  