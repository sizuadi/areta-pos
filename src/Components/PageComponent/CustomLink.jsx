import React from "react";
import { useResolvedPath, useMatch, Link } from "react-router-dom";

export default function CustomLink({ children, to, className, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
      <Link
        to={to}
        className={`${className} ${match && "active"}`}
        {...props}
      >
        {children}
      </Link>
  );
}
