import css from "./hero.module.css";

import { Twitter, Linkedin, Github } from "./socialIcons";

export default function HelloWorld() {
  const info = {
    name: "Sabrina",
    city: "Berlin",
    occupation: "web-dev",
  };

  return (
    <div className={css.hero}>
      <div className="row">
        <h1>I'm {info.name}</h1>
        <div className={css.description}>
          I'm a {info.city} based {info.occupation}. Specification in WebGIS and React js.
          Can develop Web appilcations using HTML,CSS and JavaScript.
        </div>
        <div className={css.socialIcons}>
          <a href="//github.com">
            <Github />
          </a>
          <a href="//twitter.com">
            <Twitter />
          </a>
          <a href="//linkedin.com">
            <Linkedin />
          </a>
        </div>
      </div>

    </div>
  );
}
