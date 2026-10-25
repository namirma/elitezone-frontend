import React, { useContext, useState } from 'react'
import SignUp from '../Components/SignUp'
import SmsCode from '../Components/SmsCode'
import LoginPassword from '../Components/LoginPassword';
import ConfirmationNumber from '../Components/ConfirmationNumber';
import ChangePassword from '../Components/ChangePassword';
import Roles from '../../Roles/Page/Roles';
import { AnimatePresence, motion } from 'framer-motion';


//Context
import { useAppContext } from '../../../Context/AppContext';

function Auth() {

  //Context
  const { AuthPage } = useAppContext();
  const { PhoneNumber } = useAppContext();
  const { AuthStateValue } = useAppContext();
  const [SmsCodeValue, setSmsCodeValue] = useState('');


  const AuthVarients = {
    begin: {
      x: '100vw'
    },
    visible: {
      x: 0,
      transition: {
        duration: .5,
        type: 'spring',
        stiffness: 50
      }
    },
    end: {
      x: '-100vw',
      transition: {
        duration: .5
      }
    }
  }

  return (
    <div style={{ overflowX: 'hidden' }}>

      <AnimatePresence mode='wait'>

        {AuthPage === 'SignUp' && (
          <motion.div
            key="signUp"
            variants={AuthVarients}
            initial="begin"
            animate="visible"
            exit="end"
          >
            <SignUp />
          </motion.div>
        )}

        {AuthPage === 'LoginPass' && (
          <motion.div
            key="loginPass"
            variants={AuthVarients}
            initial="begin"
            animate="visible"
            exit="end"
          >
            <LoginPassword phonenumber={PhoneNumber} />
          </motion.div>
        )}

        {AuthPage === 'ConfirmationNumber' &&
          <motion.div
            key="ConfirmationNumber"
            variants={AuthVarients}
            initial="begin"
            animate="visible"
            exit="end"
          >
            <ConfirmationNumber phonenumber={PhoneNumber} />
          </motion.div>
        }

        {AuthPage === 'SmsCode' &&
          <motion.div
            key="SmsCode"
            variants={AuthVarients}
            initial="begin"
            animate="visible"
            exit="end"
          >
            <SmsCode phonenumber={PhoneNumber} AuthStateValue={AuthStateValue} setSmsCodeValue={setSmsCodeValue} />
          </motion.div>
        }

        {AuthPage === 'ChangePassword' &&
          <motion.div
            key="ChangePassword"
            variants={AuthVarients}
            initial="begin"
            animate="visible"
            exit="end"
          >
            <ChangePassword phonenumber={PhoneNumber} SmsCodeValue={SmsCodeValue} />
          </motion.div>
        }

      </AnimatePresence>

    </div>
  )
}

export default Auth