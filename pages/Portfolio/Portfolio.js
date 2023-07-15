// import React, { useState } from 'react';
// import WebIndustry from './WebIndustry/WebIndustry.js';
// import MobileIndustry from './MobileIndustry/MobileIndustry.js';

// const tabContent = {
//   Web: <WebIndustry />,
//   Mobile: <MobileIndustry />,
// };

// export default function Portfolio() {
//   const [activeTab, setActiveTab] = useState('Web');

//   return (
//     <div>
//       <h1>Portfolio</h1>
//       <div className="portfolio-wrapper">
//         <ul className="tab-navigation">
//         {Object.keys(tabContent).map((tab) => (
//             <li
//               key={tab}
//               className={activeTab === tab ? 'active' : ''}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </li>
//           ))}
//         </ul>
//         <div className="tab-content">{tabContent[activeTab]}</div>
//       </div>

//       <style jsx>{`
//         .portfolio-wrapper {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .tab-navigation {
//           display: inline;
//         }

//         .tab-navigation li {
//           display: inline-block;
//           margin-right: 10px;
//         }

//         .tab-content {
//           display: inline;
//         }
//       `}</style>
//     </div>
//   );
// }

// // // Portfolio.js
// // import React, { useState } from 'react';
// // import WebContent from './WebIndustry/WebIndustry';
// // import MobileContent from './MobileIndustry/MobileIndustry';

// // function Portfolio() {
// //   const [activeTab, setActiveTab] = useState('Web');

// //   const tabNames = ['Web', 'Mobile'];

// //   function renderContent () {
// //     switch (activeTab) {
// //       case 'Web':
// //         return <WebContent />;
// //       case 'Mobile':
// //         return <MobileContent />;

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div>
// //       <ul className="tab-navigation">
// //         {tabNames.map((tab) => (
// //           <li
// //             key={tab}
// //             className={activeTab === tab ? 'active' : ''}
// //             onClick={() => setActiveTab(tab)}
// //           >
// //             {tab}
// //           </li>
// //         ))}
// //       </ul>
// //       <div className="tab-content">{renderContent()}</div>
// //     </div>
// //   );
// // }

// // export default Portfolio;
