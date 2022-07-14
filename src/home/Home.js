import React from 'react'
import Header from '../header/Header'
import './Home.css'
import Gridlist from '../Gridlist'


export default function Home() {
  return (
    <div>
        <Header/>
        <div className='heading'>
        <span className='upcome'>Upcoming Movies</span>
        </div>
        <Gridlist/>
    </div>
  )
}
