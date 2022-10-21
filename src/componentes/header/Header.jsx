import React from 'react';
import InputSearch from '../Search'

export default function Header (props)
{
  return (
      <header className={ props.class }>
        <div className="container py-40">
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='title'> { props.tituloPagina } </h2>
            <h1 className='subTitle'>{ props.subTituloPagina }</h1>
          </div>
          <div className='mt-70'>
            <InputSearch
              placeholder="Pesquisar no blog"
              width="w-100">              
            </InputSearch>   
          </div>
        </div>
      </header>
    )
}