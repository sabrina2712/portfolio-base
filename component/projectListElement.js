import Link from "next/link";
import { Github } from "../component/socialIcons";

const ProjectListElement = ({ title, description, link, slug }) => (
  <Link href="/projects/[slug]" as={`/projects/${slug}`}>
    <a>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={link}>
          <Github />
        </a>
      </div>
    </a>
  </Link>
);

export default ProjectListElement;
