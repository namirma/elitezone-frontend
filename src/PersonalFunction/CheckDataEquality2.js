// import React, { useState, useEffect } from 'react'
// import { useAppContext } from '../Context/AppContext';

// function CheckDataEquality2(Value) {

//   const [initialValue, setInitialValue] = useState([]);
//   useEffect(() => {
//     setInitialValue(Value.map((item) => item));
//   }, []);

//   return Value.every((item) => initialValue.includes(item) && Value.length === initialValue.length);

// }

// export default CheckDataEquality2

import React, { useState, useEffect } from 'react';

function CheckDataEquality2(Value) {

  const [initialValue, setInitialValue] = useState([]);
  useEffect(() => {
    setInitialValue(Value.map((item) => item));
  }, []);

  // Return false if Value is empty
  if (Value.length === 0) {
    return false;
  }
  else {
    return Value.every((item) => initialValue.includes(item) && Value.length === initialValue.length);
  }

}

export default CheckDataEquality2;
