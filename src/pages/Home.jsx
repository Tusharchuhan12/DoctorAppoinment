import React from 'react'
import Heder from '../compontes/Heder'
import Drmenu from '../compontes/Drmenu'
import TopDoctor from '../compontes/TopDoctor'
import Banner from '../compontes/Banner'
import Consultation from '../compontes/Consultation'
import FAQs from './FAQs'
import BenifitOline from '../compontes/BenifitOline'
function Home() {
  return (
    <div>
      <Heder></Heder>
      <Drmenu></Drmenu>
      <TopDoctor></TopDoctor>
      <Banner></Banner>
      <BenifitOline></BenifitOline>
      <Consultation></Consultation>
      <FAQs></FAQs>
    </div>
  )
}

export default Home
