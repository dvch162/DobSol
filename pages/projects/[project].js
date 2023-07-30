import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer2';
// import '@/styles/styles.css';


export default function ProjectDetailsPage () {
  const router = useRouter();
  const { project } = router.query; // Access the project parameter from the dynamic route

  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjectData = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const selectedProject = data.find((item) => item.id === parseInt(project));

      if (selectedProject) {
        setProjectData(selectedProject);
        setIsLoading(false);
      } else {
        throw new Error('Project not found mfk.');
      }
    } catch (error) {
      console.error('Error fetching project data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (project) {
      fetchProjectData();
    }
  }, [project]);

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '1rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Project Details
        </h1>
        <p className="text-blue-500">ID: {projectData.id}</p>
        <p className="text-blue-500">Title: {projectData.title}</p>
        <p className="text-blue-500">Category: {projectData.category}</p>
        <p className="text-blue-500">Description: {projectData.description}</p>
        <p className="text-blue-500">Problem: {projectData.problem}</p>
        <p className="text-blue-500">Client: {projectData.client}</p>
        <p className="text-blue-500">Solution: {projectData.solution}</p>
        {/* Render other project details */}
        <button
          style={{ backgroundColor: '#3b82f6', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.25rem', marginTop: '1rem' }}
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
};



// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// import Header from '../../components/Header';
// import Footer from '../../components/Footer2';
// // import data from '../../pages/data.json';


// const ProjectDetails = () => {
//   const router = useRouter();
//   const { project } = router.query; // Access the project parameter from the dynamic route

//   const [projectData, setProjectData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);


//   const fetchProjectData = async () => {
//     try {
//       const response = await fetch('/data.json');
//       const data = await response.json();
//       const selectedProject = data.find((item) => item.id === parseInt(project));

//       if (selectedProject) {
//         setProjectData(selectedProject);
//         setIsLoading(false);
//       } else {
//         throw new Error('Project not found mfk.');
//       }
//     } catch (error) {
//       console.error('Error fetching project data:', error);
//       setIsLoading(false);
//     }
//   };
  

//   useEffect(() => {
//     if (project) {
//       fetchProjectData();
//     }
//   }, [project]);

//   const handleGoBack = () => {
//     router.back(); // Go back to the previous page
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!projectData) {
//     return <div>Project not found.</div>;
//   }
  
//   return (
//     <div className="min-h-screen bg-white">
//       {/* <h1>{projectData.title}</h1>
//       <p>{projectData.description}</p> */}
//            <Header />
//            <div className="container mx-auto py-8">
//         <h1 className="text-3xl font-bold mb-4 text-blue-500">Project Details</h1>
//         <p className="text-blue-500">ID: {projectData.id}</p>
//         <p className="text-blue-500">Title: {projectData.title}</p>
//         <p className="text-blue-500">Category: {projectData.category}</p>
//         <p className="text-blue-500">Description: {projectData.description}</p>
//         <p className="text-blue-500">Problem: {projectData.problem}</p>
//         <p className="text-blue-500">Client: {projectData.client}</p>
//         <p className="text-blue-500">Solution: {projectData.solution}</p>
//         {/* Render other project details */}
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
//           onClick={handleGoBack}
//         >
//           Go Back
//         </button>
//       </div>
//            {/* <div className="container mx-auto py-8">
//            <h1 className="text-3xl font-bold mb-4">Project Details</h1>
//       <p>ID: {projectData.id}</p>
//       <p>Title: {projectData.title}</p>
//       <p>Category: {projectData.category}</p>
//       <p>Description: {projectData.description}</p>
//       <p>Problem: {projectData.problem}</p>
//       <p>Client: {projectData.client}</p>
//       <p>Solution: {projectData.solution}</p>
//       {/* Render other project details */}
//       {/* <button onClick={handleGoBack}>Go Back</button>
//       </div> */} 
//       <Footer />
      

//     </div>
//   );
// };

// export default ProjectDetails;
