import * as React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";
import { cls } from "../libs/utils";

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
      <div className=" border-b-2 border-gray-500 m-auto sm:py-10 p-5 sm:px-20 flex justify-between items-center w-full xl:max-w-5xl">
        <h1 className="text-xl sm:text-4xl font-bold text-gray-700">
          {pageTitle === "Main" ? data.site.siteMetadata.title : pageTitle}
        </h1>
        <nav>
          <ul className="flex space-x-10">
            <li className=" group">
              <Link
                to="/"
                className={cls(
                  "font-medium sm:text-xl",
                  pageTitle === "Main"
                    ? "text-gray-700"
                    : "text-gray-500 group-hover:text-gray-700"
                )}
              >
                Home
              </Link>
            </li>
            <li className="group">
              <Link
                to="/posts"
                className={cls(
                  "font-medium sm:text-xl",
                  pageTitle === "Blog Posts"
                    ? "text-gray-700"
                    : "text-gray-500 group-hover:text-gray-700"
                )}
              >
                Posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-full xl:max-w-5xl m-auto">
        <main className="p-10">{children}</main>
      </div>
      <div className=" fixed bottom-5 right-5 sm:bottom-20 sm:right-20 xl:right-1/4 flex space-x-5">
        <button
          className="text-gray-500 hover:text-gray-700 items-center aspect-square transition-colors"
          onClick={onMailClick}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </button>
        <a
          className="text-gray-500 hover:text-gray-700 items-center aspect-square transition-colors"
          href="https://github.com/hunman89"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Layout;
