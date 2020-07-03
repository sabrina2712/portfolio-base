import Link from "next/link";
import { Github } from "../component/socialIcons";

const ProjectListElement = ({ title, description, link, slug }) => (
  <Link href="/projects/[slug]" as={`/projects/${slug}`} >
    
    <div>
    <a>
      
      <div className="project-container">
        <h1  className="title">{title}</h1>
        <p  className="descrip">{description}</p>
        <a href={link}>
          <Github />
        </a>
    
      </div>
    </a>
    </div>
  </Link>
);

export default ProjectListElement;
