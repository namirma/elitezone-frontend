import React, { useState } from 'react';

const TextShortener = ({ value, character, expanded }) => {

  const createMarkup = (text) => {
    return { __html: text };
  };

  return (
    <div style={{ position: 'relative' }}>

      {!expanded && (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#fff)',
            position: 'absolute',
          }}
        ></div>
      )}
      
      {expanded || value.length <= character
        ?
        <div dangerouslySetInnerHTML={createMarkup(value)} />
        :
        <div dangerouslySetInnerHTML={createMarkup(`${value.substring(0, character)}...`)} />
      }
    </div>

  );
};

export default TextShortener;


// import React from 'react';

// const TextShortener = ({ value, character, expanded }) => {
//   const contentArray = Array.isArray(value) ? value : [value];

//   const textContent = contentArray.reduce((acc, child) => {
//     if (typeof child === 'string') {
//       return acc + child;
//     }
//     return acc;
//   }, '');

//   const shortenedContent = contentArray.map((child, index) => {
//     if (typeof child === 'string' && textContent.length > character && !expanded) {
//       return `${child.substring(0, character)}...`; // Limit string length
//     }
//     return child; // Return JSX element (e.g., <br />) as-is
//   });

//   return (
//     <div style={{ position: 'relative' }}>
//        {!expanded && (
//         <div
//           style={{
//             width: '100%',
//             height: '100%',
//             background: 'linear-gradient(180deg,hsla(0,0%,100%,0) 50%,#fff)',
//             position: 'absolute',
//           }}
//         ></div>
//       )}
//       {expanded || textContent.length <= character
//         ? contentArray
//         : shortenedContent
//       }
//     </div>
//   );
// };

// export default TextShortener;