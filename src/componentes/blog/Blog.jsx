import React from 'react'
import CardNotice from './cards/CardNotice'


export default function Blog()
{
  return( 
    <>
      <h2 className="colorBlue">
        POSTS
      </h2>
      <CardNotice
        title="Agora é oficial: o Windows 11 está vindo"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        data="02 de jul, 2021"
      />   
      <CardNotice
        title="Agora é oficial: o Windows 11 está vindo"
        description="Consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        data="02 de jul, 2021"
      />    
      <CardNotice
        title="Agora é oficial: o Windows 11 está vindo"
        description="Eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
        data="02 de jul, 2021"
      />    
    </>
  )
}