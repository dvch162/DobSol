import Head from 'next/head'
import fsPromises from 'fs/promises';
import path from 'path';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import ProjectDetails from './ProjectDetails';


import Header from '@/components/Header'
// import Portfolio from './Portfolio/Portfolio.js'
import Intro from './Intro'
import AboutSection from './AboutSection'
import Form from './Form'
import Services from './Services'
import Testimonials from './Testimonials'
import TopBar from './TopBar';
// import ProjectPage from './projects/[project].js'
import Footer from '../components/Footer2'



export default function Home(props) {
  const projects = props.projects;
  const router = useRouter();

  
  return (
    <div id="__next" className="body">
      <Head>
        <title>DobrobutSolution App</title>
        <meta name="description" content="Dobrobut Solution App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />
      </Head>
     
     
     
      <TopBar />       
        <div className="container">
        <div className="row">
        {/* {projects.map((project) => ( */}
          {/* // <ProjectDetails key={project.id} projects={projects} /> */}
          {/* <ProjectDetails projects={projects} />     */}
        </div>
      </div>
      {/* <div>
        {projects.map(project => (
          <div
            key={project.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.problem}</p>
            <p>{project.clientBusiness}</p>
            <p>{project.challenge}</p>
            <p>{project.solution}</p>
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                style={{ maxWidth: '100%', marginBottom: 10 }}
              />
            ))}
          </div>
        ))}
      </div> */}
        <Header />
      <Intro />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Portfolio /> */}
            <ProjectDetails projects={projects} />   


      {/* <ProjectPage /> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <AboutSection />
      <br />

      <Services />
      <br />
      <br />
      <Testimonials />
      <br />
      <Form />
      <br />
      {/* <Footer /> */}
      
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), './public/data.json');
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      // objectData
      // projects: data.projects
      projects: data

    }
  };
}
