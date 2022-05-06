import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { navButton } from "../ClassName/ClassName";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let style = "underline underline-offset-4 ";
  return (
    <div className={match && style}>
      <Link
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
