import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import mail from "../icons/mail.svg";
import github from "../icons/github.svg";

const Layout = ({ pageTitle, children }) => {
  const onMailClick = () => {
    alert("메일 주소는 hunman89@gmail.com 입니다");
  };
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
    <div className="static">
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
      <div className=" fixed bottom-5 right-20 flex">
        <img
          alt="mail address"
          className=" w-10 h-10 mr-6 hover:cursor-pointer"
          src={mail}
          onClick={onMailClick}
        />
        <Link className="w-10 h-10" to="https://github.com/hunman89">
          <img alt="github link" src={github} />
        </Link>
      </div>
    </div>
  );
};

export default Layout;
