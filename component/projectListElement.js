import Link from "next/link";
import { Github } from "../component/socialIcons";

const ProjectListElement = ({ title, description, link,img, slug }) => (
<div >
  <Link href="/projects/[slug]" as={`/projects/${slug}`} >
    <a>
    <div className="project-content">
      <h1  className="title">{title}</h1>
      <p  className="descrip">{description}</p>
      <img src={img}/>
      <a href={link}>
        <Github />
      </a>
    </div>
    </a>
  </Link>

</div>
);

export default ProjectListElement;
