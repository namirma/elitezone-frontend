import React, { createContext, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ResponsiveContext } from './ResponsiveContext';

export const NavbarContext = createContext({});

export const NavbarProvider = ({ children }) => {

  const { Under1024 } = useContext(ResponsiveContext);

  const sections = {
    ConceptRef: useRef(),
    EngineerRef: useRef(),
    ContractorRef: useRef(),
    SupplierRef: useRef(),
    EmployerRef: useRef(),
    FAQRef: useRef(),
    ContactUsRef: useRef(),
    SQGARef: useRef(),
    UserAccountInfoRef: useRef(),
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavbarClick = async (section, upperSpace) => {

    const scrollToSection = (ref) => {
      if (ref && ref.current) {
        const offsetTop = ref.current.getBoundingClientRect().top + window.scrollY - (upperSpace + (Under1024 ? 65 : 85));
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: true })
      scrollToSection(((section !== 'BrandIdentity') || (section !== 'Aboutus') || (section !== 'Video')) && (sections[`${section}Ref`]))
    } else {
      scrollToSection(((section !== 'BrandIdentity') || (section !== 'Aboutus') || (section !== 'Video')) && (sections[`${section}Ref`]))
    }

    if (section === 'Aboutus') {
      window.scrollTo(0, 0);
      navigate('/aboutus');
    }

    if (section === 'BrandIdentity') {
      window.scrollTo(0, 0);
      navigate('/elitezone-identity');
    }

    if (section === 'Video') {
      window.scrollTo(0, 0);
      navigate('/videos');
    }

  };


  return (
    <NavbarContext.Provider value={{ handleNavbarClick, sections }}>
      {children}
    </NavbarContext.Provider>
  );
};



