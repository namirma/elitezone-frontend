// import { useRef, useState, useEffect, useCallback } from "react";

// function useSimilarData(IsSameData) {
//     const prevIsSameData = useRef(IsSameData);
//     const [IsSameDataChangeToFalse, setIsSameDataChangeToFalse] = useState(false);
//     const [ShowWarningIsSameData, setShowWarningIsSameData] = useState(false);

//     useEffect(() => {
//         if (!IsSameData && prevIsSameData.current === true) {
//             setIsSameDataChangeToFalse(true);
//         }

//         if (IsSameData && IsSameDataChangeToFalse) {
//             setShowWarningIsSameData(true);
//         } else {
//             setShowWarningIsSameData(false);
//         }   

//         prevIsSameData.current = IsSameData;

//     }, [IsSameData, IsSameDataChangeToFalse]);

//     const reset = useCallback(() => {
//         setIsSameDataChangeToFalse(false)
//         setShowWarningIsSameData(false)
//     })

//     return [ShowWarningIsSameData, reset];
// }
// export default useSimilarData;


import { useRef, useState, useEffect, useCallback } from "react";

function useSimilarData(IsSameData, IsSameData2 = null) {
    const prevIsSameData = useRef(IsSameData);
    const prevIsSameData2 = useRef(IsSameData2);
    const [IsSameDataChangeToFalse, setIsSameDataChangeToFalse] = useState(false);
    const [ShowWarningIsSameData, setShowWarningIsSameData] = useState(false);

    useEffect(() => {
        const bothWereTrueInitially = prevIsSameData.current && (IsSameData2 === null || prevIsSameData2.current);
        const oneChangedToFalse = (!IsSameData || (IsSameData2 !== null && !IsSameData2));

        if (bothWereTrueInitially && oneChangedToFalse) {
            setIsSameDataChangeToFalse(true);
        }

        if ((IsSameData && (IsSameData2 === null || IsSameData2)) && IsSameDataChangeToFalse) {
            setShowWarningIsSameData(true);
        } else {
            setShowWarningIsSameData(false);
        }

        prevIsSameData.current = IsSameData;
        if (IsSameData2 !== null) {
            prevIsSameData2.current = IsSameData2;
        }

    }, [IsSameData, IsSameData2, IsSameDataChangeToFalse]);

    const reset = useCallback(() => {
        setIsSameDataChangeToFalse(false);
        setShowWarningIsSameData(false);
    }, []);

    return [ShowWarningIsSameData, reset];
}

export default useSimilarData;


// import { useRef, useState, useEffect, useCallback } from "react";

// function useSimilarData(IsSameData, IsDataSamed2) {
//     console.log('Is Data Samed : ' + IsSameData);
//     console.log('Is Data Samed 2 : ' + IsDataSamed2);

//     const prevIsSameData = useRef(IsSameData);
//     const prevIsSameData2 = useRef(IsDataSamed2);

//     const [IsSameDataChangeToFalse, setIsSameDataChangeToFalse] = useState(false);
//     const [ShowWarningIsSameData, setShowWarningIsSameData] = useState(false);

//     useEffect(() => {

//         let shouldSetChangeToFalse = false;

//         if (IsDataSamed2 !== undefined) {
//             // When IsDataSamed2 exists, compare both IsSameData and IsDataSamed2
//             if ((!IsSameData && prevIsSameData.current) && (!IsDataSamed2 && prevIsSameData2.current)) {
//                 shouldSetChangeToFalse = true;
//             }
//         } else {
//             // When IsDataSamed2 doesn't exist, only compare IsSameData
//             if (!IsSameData && prevIsSameData.current) {
//                 shouldSetChangeToFalse = true;
//             }
//         }

//         if (shouldSetChangeToFalse) {
//             setIsSameDataChangeToFalse(true);
//         }


//         if (IsDataSamed2 !== undefined) {

//             if (IsSameData && IsSameDataChangeToFalse) {
//                 setShowWarningIsSameData(true);
//             } else {
//                 setShowWarningIsSameData(false);
//             }

//         } else {

//             if (IsSameData && IsDataSamed2 && IsSameDataChangeToFalse) {
//                 setShowWarningIsSameData(true);
//             } else {
//                 setShowWarningIsSameData(false);
//             }
            
//         }

//         // Update previous values
//         prevIsSameData.current = IsSameData;
//         if (IsDataSamed2 !== undefined) {
//             prevIsSameData2.current = IsDataSamed2;
//         }

//     }, [IsSameData, IsDataSamed2, IsSameDataChangeToFalse]);

//     const reset = useCallback(() => {
//         setIsSameDataChangeToFalse(false);
//         setShowWarningIsSameData(false);
//     }, []);

//     return [ShowWarningIsSameData, reset];
// }

// export default useSimilarData;




// import { useRef, useState, useEffect, useCallback } from "react";

// function useSimilarData(IsSameDataArray) {
    
//     const prevIsSameDataArray = useRef(IsSameDataArray);
//     const [IsSameDataChangeToFalse, setIsSameDataChangeToFalse] = useState(false);
//     const [ShowWarningIsSameData, setShowWarningIsSameData] = useState(false);

//     useEffect(() => {

//         const isAnyDataChanged = IsSameDataArray.some((IsSameData, index) => 
//             !IsSameData && prevIsSameDataArray.current[index]
//         );

//         if (isAnyDataChanged) {
//             setIsSameDataChangeToFalse(true);
//         }

//         const isAllDataSame = IsSameDataArray.every((IsSameData, index) => 
//             IsSameData === prevIsSameDataArray.current[index]
//         );

//         if (isAllDataSame && IsSameDataChangeToFalse) {
//             setShowWarningIsSameData(true);
//         } else {
//             setShowWarningIsSameData(false);
//         }   

//         prevIsSameDataArray.current = IsSameDataArray;

//     }, [IsSameDataArray, IsSameDataChangeToFalse]);

//     const reset = useCallback(() => {
//         setIsSameDataChangeToFalse(false)
//         setShowWarningIsSameData(false)
//     }, []);

//     return [ShowWarningIsSameData, reset];
// }

// export default useSimilarData;



// import { useRef, useState, useEffect, useCallback } from "react";   
// function useSimilarData(IsSameDataArray) {
//     Ensure IsSameDataArray is an array
//     if (!Array.isArray(IsSameDataArray)) {
//         console.error("IsSameDataArray should be an array");
//         return [false, () => {}]; // Return defaults in case of error
//     }

//     const prevIsSameDataArray = useRef(IsSameDataArray);
//     const [IsSameDataChangeToFalse, setIsSameDataChangeToFalse] = useState(false);
//     const [ShowWarningIsSameData, setShowWarningIsSameData] = useState(false);

//     useEffect(() => {
//         const isAnyDataChanged = IsSameDataArray.some((IsSameData, index) => 
//             !IsSameData && prevIsSameDataArray.current[index]
//         );

//         if (isAnyDataChanged) {
//             setIsSameDataChangeToFalse(true);
//         }

//         const isAllDataSame = IsSameDataArray.every((IsSameData, index) => 
//             IsSameData === prevIsSameDataArray.current[index]
//         );

//         if (isAllDataSame && IsSameDataChangeToFalse) {
//             setShowWarningIsSameData(true);
//         } else {
//             setShowWarningIsSameData(false);
//         }   

//         prevIsSameDataArray.current = IsSameDataArray;

//     }, [IsSameDataArray, IsSameDataChangeToFalse]);

//     const reset = useCallback(() => {
//         setIsSameDataChangeToFalse(false);
//         setShowWarningIsSameData(false);
//     }, []);

//     return [ShowWarningIsSameData, reset];
// }

// export default useSimilarData;

