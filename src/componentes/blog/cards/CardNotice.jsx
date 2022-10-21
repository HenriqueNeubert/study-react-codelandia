import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function CardNotice(props)
{
  return(
    <div className='list_blog'>
      <div className='list_blog_item'>      
        <div>
          <div className='data d-flex justify-content-between'>
            <time>
              { props.data }
            </time>
            <FontAwesomeIcon className="iconColorBlack" icon={faEnvelope} />
          </div>
          <h3>
            { props.title }
          </h3>
          <p>
            { props.description }
          </p>
        </div>
      </div>
    </div>
  )
}  