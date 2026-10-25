import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import ApiBaseUrl from '../Api/axios';
import LoadingDots from '../Pages/Auth/Components/LoadingDots';
import { useAppContext } from '../Context/AppContext';

function PrivateRoute({ children, RequestPage }) {

  // Context
  const {ProfileDataIsEmpty, setUserLoggedIn, UserLoggedIn } = useAppContext();

  const [TrueToken, setTrueToken] = useState(null);
  const [IsLoading, setIsLoading] = useState(true);
  const Token = localStorage.getItem('Token') || '';

  const location = useLocation();

  useEffect(() => {
    if (UserLoggedIn === null) {
      SendRequestFunction();
    } else {
      setTrueToken(UserLoggedIn);
      setIsLoading(false);
    }
  }, [UserLoggedIn]); // Only re-run if UserLoggedIn changes

  const SendRequestFunction = async () => {
    if (Token && Token.length > 0) {
      try {

        const SendRequest = await ApiBaseUrl.get('api/profile', {
          headers: {
            Authorization: 'Bearer ' + Token,
            Accept: 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
          }
        });

        if (SendRequest.status === 200) {
          setTrueToken(true);
          setUserLoggedIn(true);

        } else {
          setTrueToken(false);
          setUserLoggedIn(false);
        }
      } catch (err) {
        setTrueToken(false);
        setUserLoggedIn(false);
      }
      finally {
        setIsLoading(false);
      }
    } else {
      setTrueToken(false);
      setUserLoggedIn(false);
      setIsLoading(false);
    }
  };

  if (IsLoading) {
    return (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LoadingDots Color='var(--Primary-EZ)' />
      </div>
    );
  }

  // Navigation logic
  if (RequestPage === 'Profile') {
    if (TrueToken) {
      return ProfileDataIsEmpty && location.pathname==='/Professional-profile' ? <Navigate to='/profile' />  : children;
    }
    return <Navigate to="/auth" />;
  }

  // if (RequestPage === 'Profile') {
  //   return TrueToken ? children : <Navigate to='/auth' />;
  // }

  if (RequestPage === 'Auth') {
    return TrueToken ? <Navigate to='/profile' /> : children;
  }

}

export default PrivateRoute;
