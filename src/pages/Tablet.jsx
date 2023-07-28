import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Posts from '../components/Posts'

const Tablet = () => {
  return (
    <div className="tablet">
        <h1>TABLET</h1>
        <Posts/>

       
    </div>
  )
}

export default Tablet
