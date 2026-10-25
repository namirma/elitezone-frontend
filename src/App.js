import React from 'react';
import 'normalize.css';
import './fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Page/Home';
import Roles from './Pages/Roles/Page/Roles';
import Auth from './Pages/Auth/Page/Auth';
import UserProfile from './Pages/Info/Page/UserProfile';
import SummaryActivites from './Pages/Info/Components/Summary-Activites/Summary-Activites';
import AboutUs from './Pages/AboutUs/Page/AboutUs';
import JobInformationSummary from './Pages/Info/Components/JobInfomationSummary/JobInformationSummary';
import Orders from './Pages/Info/Components/Orders/Orders';
import MyAccounts from './Pages/Info/Components/My-Accounts/My-Accounts';
import Comments from './Pages/Info/Components/Comments/Comments';
import Addresses from './Pages/Info/Components/Addresses/Addresses';
import Notifications from './Pages/Info/Components/Notification/Notifications';
import UserAccountInformation from './Pages/Info/Components/UserAccountInformation/UserAccountInformation';
import Welcome from './Pages/Welcome/Welcome';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { AppContextProvider } from './Context/AppContext';
import MyBadges from './Pages/Info/Components/My_Badges/MyBadges';
import NotFound from './Pages/Errors/NotFound';
import { Toaster } from 'react-hot-toast';
import { NavbarProvider } from './Context/NavbarContext';
import { ResponsiveProvider } from './Context/ResponsiveContext';
import Terms from './Pages/TermsAndConditions/Components/Terms';
import Privacy from './Pages/TermsAndConditions/Components/Privacy';
import ScrollToTop from './PersonalFunction/ScrollToTop';

import RoleEditModal from './Pages/Info/Components/Modal/RoleEditModal';
import EngineerExplain from './Pages/Roles/Components/EngineerExplain';
import ContractorExplain from './Pages/Roles/Components/ContractorExplain';
import SupplierExplain from './Pages/Roles/Components/SupplierExplain';
import EmployerExplain from './Pages/Roles/Components/EmployerExplain';
import ProfessionalProfile from './Pages/Info/Components/Profiles/ProfessionalProfile';
import LoginDetectionAndLoadData from './UserLoginDetection/LoginDetectionAndLoadData';
import DetectMobileType from './PersonalFunction/DetectMobileType';
import Panel from './Pages/Info/Components/Panel/Page/Panel';
import BrandIdentity from './Pages/BrandIdentity/Page/BrandIdentity';
import Videos from './Pages/Videos/Videos';
import ImplementationProcess from './Pages/Info/Components/ImplementationProcess/ImplementationProcess';
import SazeVideos from './Pages/Videos/SazeVideos';
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import EngineerLanding from './Pages/LandingPage/Engineer/EngineerLanding';
import ContractorLanding from './Pages/LandingPage/Contractor/ContractorLanding';
import SupplierLanding from './Pages/LandingPage/Supplier/SupplierLanding';
import EmployerLanding from './Pages/LandingPage/Employer/EmployerLanding';


function App() {

  return (
    <>
      <AppContextProvider>
        <ResponsiveProvider>

          <BrowserRouter>

            <DetectMobileType />

            <ScrollToTop />
            <NavbarProvider>

              <LoginDetectionAndLoadData>
                <Routes>

                  {/* Home */}
                  <Route path='/' element={<Home />} />

                  {/* Welcome */}
                  <Route path='/welcome' element={<PrivateRoute RequestPage='Profile'> <Welcome /> </PrivateRoute>} />

                  <Route path='/elitezone-identity' element={<BrandIdentity />} />

                  {/* AboutUs */}
                  <Route path='/aboutus' element={<AboutUs />} />

                  {/* Videos */}
                  <Route path='/videos' element={<Videos />} />

                  <Route path='/saze90-videos' element={<SazeVideos/>} />

                  <Route path='/verify-email/*' element={<VerifyEmail/>} />

                  {/* Auth */}
                  <Route path='/auth' element={<PrivateRoute RequestPage='Auth'> <Auth /> </PrivateRoute>} />

                  {/* Profile */}
                  <Route path='profile' element={<PrivateRoute RequestPage='Profile'> <UserProfile /> </PrivateRoute>}>
                    <Route index element={<UserAccountInformation />} />
                    <Route path='job-info' element={<JobInformationSummary />} />
                    <Route path='impl-process' element={<ImplementationProcess />} />
                    <Route path='my-badges' element={<MyBadges />} />
                    <Route path='summary-activities' element={<SummaryActivites />} />
                    <Route path='notification' element={<Notifications />} />
                    {/* <Route path='orders' element={<Orders />} />
                    <Route path='my-accounts' element={<MyAccounts />} />
                    <Route path='comments' element={<Comments />} />
                    <Route path='addresses' element={<Addresses />} /> */}
                  </Route>

                  {/* Panel */}
                  <Route path='panel' element={<PrivateRoute RequestPage='Profile'> <Panel />  </PrivateRoute>} />

                  {/* Set Role Or Edit Role */}
                  <Route path='setrole' element={<Roles />} />
                  <Route path='/editrole' element={<PrivateRoute RequestPage='Profile'> <RoleEditModal /> </PrivateRoute>} />

                  {/* Professional Profile */}
                  <Route path='/Professional-profile' element={<PrivateRoute RequestPage='Profile'> <ProfessionalProfile /> </PrivateRoute>} />

                  {/* Information about the characters */}
                  <Route path='/role-engineer' element={<EngineerExplain />} />
                  <Route path='/role-contractor' element={<ContractorExplain />} />
                  <Route path='/role-supplier' element={<SupplierExplain />} />
                  <Route path='/role-employer' element={<EmployerExplain />} />

                  <Route path='/engineer' element={<EngineerLanding />} />
                  <Route path='/contractor' element={<ContractorLanding />} />
                  <Route path='/supplier' element={<SupplierLanding />} />
                  <Route path='/employer' element={<EmployerLanding />} />

                  <Route path='/terms' element={<Terms />} />
                  <Route path='/privacy' element={<Privacy />} />

                  {/* 404 Error - Page Not Found */}
                  <Route path='*' element={<NotFound />} />

                </Routes>

              </LoginDetectionAndLoadData>

            </NavbarProvider>
          </BrowserRouter>
        </ResponsiveProvider>
      </AppContextProvider>

      <Toaster position="top-center" reverseOrder={false} />

    </>
  );
}

export default App;
