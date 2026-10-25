import React, { useEffect, useContext, useState } from 'react';
import './Home.css';
import Navbar from './../Components/Navbar';
import Header from './../Components/Header';
import CardSorting from './../Components/CardSorting';
import Concept from '../Components/Concept';
import Contractor from './../Components/Contractor';
import Engineer from './../Components/Engineer';
import Supplier from './../Components/Supplier';
import Employer from './../Components/Employer';
import Introduction from './../Components/Introduction';
import FAQ from './../Components/FAQ';
import MapEZ from './../Components/MapEZ';
import Footer from './../Components/Footer';
import Flash2_White_Icon from './../../../PublicAssets/Arrow_Icons/Flash2_White_Icon.svg';
import { AnimatePresence, motion } from 'framer-motion'

// Context
import { useAppContext } from '../../../Context/AppContext';
import { NavbarContext } from '../../../Context/NavbarContext';
import SQGA from '../Components/SQGA';
import { useLocation } from 'react-router-dom';

function Home() {

  // Context
  const { setAuthPage, setAuthStateValue } = useAppContext();


  // State for controlling the "Go Down" button visibility
  const [showGoUpButton, setshowGoUpButton] = useState(false);

  useEffect(() => {
    setAuthPage('SignUp');
    setAuthStateValue('');

    // Scroll event listener to control the visibility of the "Go Down" button
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setshowGoUpButton(true);
      } else {
        setshowGoUpButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setAuthPage, setAuthStateValue]);

  // Refs
  const { sections } = useContext(NavbarContext);

  const handleGoDown = () => {
    window.scrollTo(0, 0);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='home-style'>

      <Navbar />
      <Header />
      <CardSorting />

      <div ref={sections.ConceptRef}>
        <Concept />
      </div>

      <div ref={sections.EngineerRef}>
        <Engineer />
      </div>

      <div ref={sections.ContractorRef}>
        <Contractor />
      </div>

      <div ref={sections.SupplierRef}>
        <Supplier />
      </div>

      <div ref={sections.EmployerRef}>
        <Employer />
      </div>

      <Introduction />

      <div ref={sections.FAQRef}>
        <FAQ />
      </div>

      <div ref={sections.ContactUsRef}>
        <MapEZ />
      </div>

      <div ref={sections.SQGARef}>
        <SQGA />
      </div>

      <Footer />

      <AnimatePresence>
        {showGoUpButton && (
          <motion.div className="go-up-button" onClick={handleGoDown}
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <img src={Flash2_White_Icon} alt='img' style={{ transform: 'rotate(-270deg)' }} />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Home;
