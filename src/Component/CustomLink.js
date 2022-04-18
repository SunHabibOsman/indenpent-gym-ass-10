import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React from 'react';



function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ backgroundColor: match ? "red" : "white", color: match ? 'white' : 'blue', padding: match ? '5px' : '0px' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}
export default CustomLink;