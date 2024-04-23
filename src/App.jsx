import { useState } from 'react'
import './App.css'
import {Typography } from '@mui/material'
import Card from './components/Card'

function App() {
  return (
    <>
      <Card size={'small'} title={'card header'} discription={'some discription'} />
      <Card size={'large'} title={'card header1'} discription={'some discription text'} />7   
    </>
  )
}

export default App
