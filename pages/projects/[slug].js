import projects from "../../content/projects.json";
import { Github } from "../../component/socialIcons";

const Project = ({ title, description, link, slug }) => (
  <main>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={link}>
        <Github />
      </a>
    </div>
  </main>
);

export default Project;

// Get data per page
export async function getStaticProps(context) {
  const pageProps = projects.find(({ slug }) => slug === context.params.slug);
  return {
    props: pageProps,
    // will be passed to the page component as props
  };
}

// which page urls do exist
export async function getStaticPaths() {
  const paths = projects.map(({ slug }) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
