import Link from "next/link";
import { Github } from "../component/socialIcons";

const ProjectListElement = ({ title, description, link, slug }) => (
  <Link href="/projects/[slug]" as={`/projects/${slug}`} className="container">
    
   
    <a>
      
      <div className="project-content">
        <h1  className="title">{title}</h1>
        <p  className="descrip">{description}</p>
        <a href={link}>
          <Github />
        </a>
    
      </div>
    </a>
 
  </Link>
);

export default ProjectListElement;
