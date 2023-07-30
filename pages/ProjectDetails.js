// Child component (ProjectDetails)
import Link from 'next/link';

export default function ProjectDetails({ projects }) {

  return (
    <div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', 
      textAlign: 'center' }}
      >Projects</h1>
 
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {projects.map((project) => (
        <div key={project.id}
        style={{
            flex: '0 0 calc(33.3333% - 1rem)', // Adjust the width as needed
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '0.25rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            background: '#fff',
            display: 'flex', // Add display flex to center items inside the card
              flexDirection: 'column', // Set flex direction to column to stack elements vertically
              justifyContent: 'center', // Center items horizontally
              alignItems: 'center', // Center items vertically
          }}
        >
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <h2>{project.category}</h2>

            {/* Center the image */}
            <div
              style={{
                display: 'flex', // Add display flex to center the image
                justifyContent: 'center', // Center the image horizontally
                alignItems: 'center', // Center the image vertically
                marginBottom: '1rem', // Add some spacing below the image
              }}
            >
              <img src={`/${project.screenshots[0]}`} alt="Project Screenshot" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>        

          {/* Details button/link */}
          <Link href={`/projects/${project.id}`}>
           <button className="btn btn-primary"
           style={{
            backgroundColor: '#3b82f6',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            marginTop: '1rem',
            cursor: 'pointer', // Add cursor pointer for better UX
          }}
           >Details</button>
           </Link>
        </div>
      ))}
    </div>
    </div>
    
  );
}