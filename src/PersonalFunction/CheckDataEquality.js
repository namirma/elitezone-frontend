// import { useRef, useEffect, useState } from 'react';

// function CheckDataEquality(values) {
//     const initialValues = useRef();
//     const [isEqual, setIsEqual] = useState(null);

//     useEffect(() => {
//         // Set the initial values only if they haven't been set before and all values are populated
//         if (!initialValues.current && values.every(value => value !== undefined && value !== null)) {
//             initialValues.current = [...values];
//         }

//         if (initialValues.current) {
//             // Compare current values with the initial values
//             const areEqual = initialValues.current.every((item, index) => item === values[index]);
//                 setIsEqual(areEqual);
//         }
//     }, [values]);

//     return isEqual;
// }

// export default CheckDataEquality;

import { useRef, useEffect, useState } from 'react';

function CheckDataEquality(values) {
    const initialValues = useRef(null);
    const [isEqual, setIsEqual] = useState(null);

    useEffect(() => {
        // Ensure initialValues are set only once and only when all values are populated
        if (!initialValues.current && values.every(value => value !== undefined || value !== null)) {
            initialValues.current = [...values];
        }

        // Compare current values with the initial values if they exist
        if (initialValues.current) {
            const areEqual = initialValues.current.every((item, index) => item === values[index]);
            if (isEqual !== areEqual) {
                setIsEqual(areEqual);
            }
        }
    }, [values]);

    return isEqual;
}

export default CheckDataEquality;
