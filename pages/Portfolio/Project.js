// // import { useRouter } from 'next/router';

// // export default function Project() {
// //   const router = useRouter();
// //   const { title } = router.query;

// //   return (
// //     <div>
// //       <h2>Project Details</h2>
// //       <h3>{title}</h3>
// //       {/* Add your project details content here */}
// //     </div>
// //   );
// // }

// // import { useRouter } from 'next/router';

// // export default function Project() {
// //   const router = useRouter();
// //   const { query } = router;

// //   // Access the selected project's data and projectData from the query parameters
// //   const selectedProject = query.title ? query.projectData.find((project) => project.title === query.title) : null;

// //   if (!selectedProject) {
// //     return <p>Project not found.</p>;
// //   }

// //   return (
// //     <div>
// //       <h2>Project Details</h2>
// //       <h3>{selectedProject.title}</h3>

// //       <h3>Problem</h3>
// //       <p>{selectedProject.problem}</p>
// //       {selectedProject.screenshots[0] && (
// //         <img src={selectedProject.screenshots[0]} alt={`Screenshot 1`} />
// //       )}

// //       <h3>The Client</h3>
// //       <p>{selectedProject.client}</p>
// //       <p>{selectedProject.clientBusiness}</p>
// //       {selectedProject.screenshots[1] && (
// //         <img src={selectedProject.screenshots[1]} alt={`Screenshot 2`} />
// //       )}

// //       <h3>The Challenge</h3>
// //       <p>{selectedProject.challenge}</p>
// //       {selectedProject.screenshots[2] && (
// //         <img src={selectedProject.screenshots[2]} alt={`Screenshot 3`} />
// //       )}

// //       <h3>The Solution</h3>
// //       <p>{selectedProject.solution}</p>
// //       {selectedProject.screenshots.slice(3).map((screenshot, index) => (
// //         <img key={index} src={screenshot} alt={`Screenshot ${index + 4}`} />
// //       ))}
// //     </div>
// //   );
// // }


// import { useRouter } from 'next/router';

// export default function Project({ projectData }) {
//   const router = useRouter();
//   const { title } = router.query;

//   // Find the project based on the title query parameter
//   const selectedProject = projectData.find((project) => project.title === title);

//   if (!selectedProject) {
//     return <p>Project not found.</p>;
//   }

//   return (
//     <div>
//       <h2>Project Details</h2>
//       <h3>{selectedProject.title}</h3>

//       <h3>Problem</h3>
//       <p>{selectedProject.problem}</p>
//       {selectedProject.screenshots[0] && (
//         <img src={selectedProject.screenshots[0]} alt={`Screenshot 1`} />
//       )}

//       <h3>The Client</h3>
//       <p>{selectedProject.client}</p>
//       <p>{selectedProject.clientBusiness}</p>
//       {selectedProject.screenshots[1] && (
//         <img src={selectedProject.screenshots[1]} alt={`Screenshot 2`} />
//       )}

//       <h3>The Challenge</h3>
//       <p>{selectedProject.challenge}</p>
//       {selectedProject.screenshots[2] && (
//         <img src={selectedProject.screenshots[2]} alt={`Screenshot 3`} />
//       )}

//       <h3>The Solution</h3>
//       <p>{selectedProject.solution}</p>
//       {selectedProject.screenshots.slice(3).map((screenshot, index) => (
//         <img key={index} src={screenshot} alt={`Screenshot ${index + 4}`} />
//       ))}
//     </div>
//   );
// }
