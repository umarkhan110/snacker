import React, { useEffect } from 'react';
import { Inter } from 'next/font/google'
import HomeCategories from '../components/HomeCategories'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeStartImage from '../components/HomeStartImage'
import HomeClients from '../components/HomeClients'
import HomeCards from '../components/HomeCards'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
//   useEffect(() => {
//     AOS.init({
//         duration: 1000, // Animation duration in milliseconds
//         once: true, // Animate only once when the element is in the viewport
//     });
// }, []);
  return (
    <>
      
      <div className='background'>
        <HomeStartImage />
        <HomeCategories/>
        {/*<HomeSlider speakers={speakers}/>*/}
        <HomeCards />
        <HomeClients />
    </div>
    </>
  )
}
