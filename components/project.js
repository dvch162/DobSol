import React from 'react';

const Project = ({ project }) => {
  if (!project) {
    return <div>Loading...</div>; // Add a loading state if the project data is not available
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.problem}</p>
      <p>{project.client}</p>
      <p>{project.clientBusiness}</p>
      <p>{project.challenge}</p>
      <p>{project.solution}</p>
      {/* Render other project details */}
    </div>
  );
};

export default Project;
