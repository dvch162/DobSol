// // import React, { useState } from 'react';
// // import industries from './webindustries.json';

// // export default function WebIndustry() {
// //   // const industries = 

// //   const [selectedIndustry, setSelectedIndustry] = useState(null);

// //   const handleIndustryClick = (industry) => {
// //     setSelectedIndustry(industry);
// //   };

// //   const handleProjectDetails = (project) => {
// //     // Handle project details, e.g., navigate to a project page
// //     console.log(`Viewing details of ${project.title}`);
// //   };

// //   return (
// //     <div>
// //       <h2>Web Industry</h2>
// //       <ul>
// //         {industries.map((industry) => (
// //           <li key={industry.name}>
// //             <button onClick={() => handleIndustryClick(industry)}>
// //               {industry.name}
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //       {selectedIndustry && (
// //         <div>
// //           <h3>{selectedIndustry.name}</h3>
// //           <div style={{ display: 'flex', flexWrap: 'wrap' }}>
// //           {selectedIndustry.projects.map((project) => (
// //             <div key={project.title} className="project-card" style={{ width: '300px', margin: '10px' }}>
// //               <img src={project.image} alt={project.title} />
// //               <h4>{project.title}</h4>
// //               <p>{project.description}</p>
// //               <button onClick={() => handleProjectDetails(project)}>
// //                 Details
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // import React from 'react';

// // export default function WebIndustry() {
// //   const industries = [
// //     'Education',
// //     'Beauty',
// //     'eCommerce',
// //     'Food',
// //     'Medical',
// //     'Real Estate',
// //     'Travel',
// //     'Personal',
// //     'Fitness',
// //     'Car Services',
// //   ];

// //   return (
// //     <div>
// //       <h2>Web Industries</h2>
// //       <ul>
// //         {industries.map((industry) => (
// //           <li key={industry}>{industry}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// import React, { useState } from 'react';
// import { useRouter } from 'next/router';
// // import Link from 'next/link';
// import industries from './projectData.json';
// import Project from '../project'; // Import the Project component here

// export default function WebIndustry() {
//   const [selectedIndustry, setSelectedIndustry] = useState(null);
//   const router = useRouter();

//   const handleIndustryClick = (industry) => {
//     setSelectedIndustry(industry);
//   };

//   const handleProjectDetails = (project) => {
//     console.log(`Viewing details of ${project.title}`);
//     router.push({
//       pathname: `/project`,
//       query: { title: project.title },
//       // Pass any other necessary props to the Project component here
//     });
//   };

//   return (
//     <div>
//       <h2>Web Industry</h2>
//       <ul>
//         {industries.map((industry) => (
//           <li key={industry.name}>
//             <button onClick={() => handleIndustryClick(industry)}>
//               {industry.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//       {selectedIndustry && (
//         <div>
//           <h3>{selectedIndustry.name}</h3>
//           <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//             {selectedIndustry.projects.map((project) => (
//               <div
//                 key={project.title}
//                 className="project-card"
//                 style={{ width: '300px', margin: '10px' }}
//               >
//                 <img src={project.image} alt={project.title} />
//                 <h4>{project.title}</h4>
//                 <p>{project.description}</p>
//                 <button onClick={() => handleProjectDetails(project)}>
//                   Details
//                 </button>
//               </div>
//             ))}
//           </div>
//           <Project projectData={selectedIndustry.projects} /> Pass the selected projects as props to the Project component
//         </div>
//       )}
//     </div>
//   );
// }
