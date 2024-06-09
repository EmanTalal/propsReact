import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Programers from './component/Programers'
import Services from './component/Services'
import Companies from './component/Companies'
function App() {

  return (
    <>
    <Companies
       namecomany="Comany Name:Aramco"
       worknam="Worker Number:10293"
       Founded="year of Founded:1978"
       Services="Oli-Gaz"
       Price="1000$"  
       name1="Amal"
       Languges="python"
       Work="6"
       Company="Aramco"
    />
    <Companies
        namecomany="Comany Name:Twaq Academy"
        worknam="Worker Number:202"
        Founded="year of Founded:2019"
        Services="BootCamps"
        Price="0$"
        name="Mohammed"
        Languges="java"
        Work="6"
        Company="Twaq Academy"
    />
<Companies
        namecomany="Comany Name:Alibaba Cloud"
        worknam="Worker Number:3029 "
        Founded="year of Founded:2018"
        Services="Cloud Services"
        Price="Forme 10-10000$"
        name="Saad"
        Languges="C++"
        Work="10"
        Company="Alibaba Cloud"
    />
    </>
  )
}

export default App
