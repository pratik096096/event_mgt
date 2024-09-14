import React from 'react'
import { Helmet } from 'react-helmet-async'
import Carousels from '../components/Carousels'
import Contactus from '../components/Contactus'

import Services from '../layouts/Services'
import Categories from '../components/Categories'
import Newsletter from '../layouts/Newsletter'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home - EventCraftHub - Your Ultimate Event Management Destination</title>
      </Helmet>
      <Carousels/>
      <Categories/>
      
      <Services/>
      <Newsletter/>
      <Contactus/>
    </div>
  )
}
