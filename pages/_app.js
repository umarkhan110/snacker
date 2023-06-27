// import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TidioChat from '../components/TidioChat';
import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head';
// import '../styles/About.css';
// import '../styles/Card.css';
// import '../styles/Footer.css';
// import '../styles/Home.css';
// import '../styles/HomeCards.css';
// import '../styles/HomeSlider.css';
// import '../styles/Navbar.css';
// import '../styles/RequestForm.css';
// import '../styles/SpeakerProfile.css';
// import '../styles/Speakers.css';

// 

function MyApp({ Component, pageProps }) {
  

  return (
    <>
     <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Open+Sans:wght@300&family=Roboto:ital,wght@0,100;0,300;0,700;0,900;1,100;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Component {...pageProps} />

    </>
  );
}

export default MyApp;
