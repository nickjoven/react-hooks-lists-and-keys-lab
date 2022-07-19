import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // have an array of links
  // need links to display <a href="#element">element</a>
  // easiest way to render something is with a component function

  const linkTag = links.map((element) => (
    <a key={element} href={`#${element}`}>{element}</a>
    )
  )

  return <nav>{linkTag}</nav>;
}

export default NavBar;
