import Hero from "../component/hero";

import ProjectListElement from "../component/projectListElement";

import projects from "../content/projects.json";

export default function Home() {
  return (
    <main>
      <Hero />
      {projects.map(ProjectListElement)}
    </main>
  );
}
