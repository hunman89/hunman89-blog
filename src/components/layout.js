import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className=" border-b-2 m-auto px-10 py-5 flex justify-between w-10/12">
        <h1 className=" text-2xl font-semibold align-middle p-4">
          {pageTitle}
        </h1>
        <nav>
          <ul className="flex">
            <li className="p-4">
              <Link to="/" className=" hover:font-medium">
                Home
              </Link>
            </li>
            <li className="p-4">
              <Link to="/posts" className="hover:font-medium">
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-10/12 m-auto">
        <main className="p-10 w-2/3">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
