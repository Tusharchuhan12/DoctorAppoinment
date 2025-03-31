import React from 'react'
import Heder from '../compontes/Heder'
import SpecialityMenu from '../compontes/SpecialityMenu'
import TopDoctor from '../compontes/TopDoctor'
import Banner from '../compontes/Banner'
import Consultation from '../compontes/Consultation'
import FAQs from './FAQs'
import BenifitOline from '../compontes/BenifitOline'
function Home() {
  return (
    <div>
      <Heder></Heder>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctor></TopDoctor>
      <Banner></Banner>
      <BenifitOline></BenifitOline>
      <Consultation></Consultation>
      <FAQs></FAQs>
    </div>
  )
}

export default Home
