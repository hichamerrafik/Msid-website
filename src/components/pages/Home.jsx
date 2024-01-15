import React, {Fragment} from 'react'
import Header from '../Header/header'
import TitleSection from '../pages/TitleSection'
import About_us from './About_us'
import Admission from '../pages/Admission'
import Footer from '../Footer/Footer'
import Cursus from './Cursus'
import About from './About'

const Home = () => {
  return (
    <Fragment>
      <Header/>
      <TitleSection/>    
      <About_us/>
      <Admission/>
      <Cursus/>
      <Footer/>
      

    </Fragment>
  )
}

export default Home