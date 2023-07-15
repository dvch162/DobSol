// Child component (ProjectDetails)
import Link from 'next/link';
// import { useRouter } from 'next/router';


export default function ProjectDetails({ projects }) {
//   const { id, title, category, description, problem, client, solution } = projects;
//   const router = useRouter();

//   const handleClick = () => {
//     router.push(`/projects/${id}`);
//   };

  return (

    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h2>{project.category}</h2>

          {/* Details button/link */}
          <Link href={`/projects/${project.id}`}>
           {/* <button className="btn btn-primary" onClick={handleClick}> */}
           <button className="btn btn-primary">Details</button>
           </Link>
        </div>
      ))}
    </div>

    // <div className="col-lg-4 col-md-6 mb-4">
    //   <div className="card">
    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
    //       <p className="card-text">{description}</p>
    //       <Link href={`/projects/${project.id}`}>
    //       <button className="btn btn-primary" onClick={handleClick}>
    //         Details
    //       </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}