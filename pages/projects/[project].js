import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer2';
import data from '../../pages/data.json';


const ProjectDetails = () => {
  const router = useRouter();
  const { project } = router.query; // Access the project parameter from the dynamic route

  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchProjectData = async () => {
    try {
      // const response = await fetch('../../pages/data.json');
      // const data = await response.json();
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
  //     setProjectData(selectedProject);
  //   } catch (error) {
  //     console.error('Error fetching project data:', error);
  //   }
  // };

  useEffect(() => {
    if (project) {
      fetchProjectData();
    }
  }, [project]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found.</div>;
  }
  // const [projectData, setProjectData] = useState(null);

  // useEffect(() => {
  //   // Fetch the project data using the project parameter
  //   const fetchProjectData = async () => {
  //     try {
  //       // const response = await fetch(`/api/projects/${project}`);
  //       const response = await fetch(`/projects/${project}`);

        
  //       const data = await response.json();
  //       setProjectData(data);
  //     } catch (error) {
  //       console.error('Error fetching project data:', error);
  //     }
  //   };

  //   if (project) {
  //     fetchProjectData();
  //   }
  // }, [project]);

  // if (!projectData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* <h1>{projectData.title}</h1>
      <p>{projectData.description}</p> */}
           <Header />
      <h1>Project Details</h1>
      <p>ID: {projectData.id}</p>
      <p>Title: {projectData.title}</p>
      <p>Category: {projectData.category}</p>
      <p>Description: {projectData.description}</p>
      <p>Problem: {projectData.problem}</p>
      <p>Client: {projectData.client}</p>
      <p>Solution: {projectData.solution}</p>
      {/* Render other project details */}

      <Footer />
    </div>
  );
};

export default ProjectDetails;


// // [project].js (Dynamic Route File)
// import fsPromises from 'fs/promises';
// import path from 'path';
// // Import necessary dependencies/components
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// export default function ProjectDetailsPage({ project }) {
//   // Access project data using the "project" prop

//   return (
//     <div>
//       <Header />

//       {/* Render project details */}
//       <h1>Project Details</h1>
//       {/* <p>Project ID: {project.id}</p> */}
//       <p>Title: {project.title}</p>
//       <p>Category: {project.category}</p>
//       {/* Render other project details as needed */}

//       <Footer />
//     </div>
//   );
// }

// // export async function getStaticPaths() {
// //   const paths = [
// //     { params: { project: 'project1' } },
// //     { params: { project: 'project2' } },
// //     { params: { project: 'project3' } },
// //   ];

// export async function getStaticPaths() {
//   const filePath = path.join(process.cwd(), './pages/data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   const paths = data.projects.map((project) => ({
//     params: { project: project.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const filePath = path.join(process.cwd(), './pages/data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const data = JSON.parse(jsonData);

//   const project = data.projects.find((p) => p.id === parseInt(params.project));

//   return {
//     props: {
//       project,
//       // projects: data.projects

//     },
//   };
// }

// // Fetch project data using getStaticProps
// export async function getStaticProps({ params }) {
//   // Perform necessary logic to fetch project data based on "params.project"

//   // Example: Fetch project data from an API or file
//   const project = {
//     id: params.project,
//     title: 'Project Title',
//     category: 'Category',
//     // Other project details
//   };

//   return {
//     props: {
//       project,
//     },
//   };
// }

// // Specify dynamic paths using getStaticPaths
// export async function getStaticPaths() {
//   // Fetch the list of project slugs or generate them dynamically

//   // Example: Hardcoded project slugs
//   const projectSlugs = ['project-1', 'project-2', 'project-3'];

//   const paths = projectSlugs.map((slug) => ({
//     params: { project: slug },
//   }));

//   return {
//     paths,
//     fallback: false, // Set to "false" if all project slugs are known in advance
//   };
// }
