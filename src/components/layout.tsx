import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { cls } from "../libs/utils";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

interface ILayoutData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const [theme, setTheme] = React.useState("light");
  React.useEffect(() => {
    const storageTheme = localStorage.getItem("color-theme");
    if (storageTheme) {
      setTheme(storageTheme);
    }
  }, []);
  const onMailClick = () => {
    alert("메일 주소는 hunman89@gmail.com 입니다");
  };
  const themeToggle = () => {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        setTheme("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        setTheme("light");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      setTheme("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };
  const data: ILayoutData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={theme}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <div className=" dark:bg-slate-900 min-h-screen ">
        <div className=" border-b-2 border-gray-500 m-auto sm:py-10 p-5 sm:px-20 flex justify-between items-center w-full xl:max-w-5xl">
          <h1 className="text-xl sm:text-4xl font-bold text-gray-700 dark:text-white">
            {pageTitle === "Main" ? data.site.siteMetadata.title : pageTitle}
          </h1>
          <nav>
            <ul className="flex space-x-10">
              <li className=" group">
                <Link
                  to="/"
                  className={cls(
                    "font-medium sm:text-xl ",
                    pageTitle === "Main"
                      ? "text-gray-700 dark:text-white"
                      : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-white"
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
                      ? "text-gray-700 dark:text-white"
                      : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-white"
                  )}
                >
                  Posts
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full xl:max-w-5xl m-auto">
          <main className="sm:px-10">{children}</main>
        </div>
        <div className=" fixed bottom-5 right-5 sm:bottom-20 sm:right-20 xl:right-1/4 flex space-x-5">
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
            onClick={themeToggle}
          >
            {theme === "dark" ? (
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
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
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>
          <button
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
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
            className="text-gray-500 hover:text-gray-700 dark:hover:text-white items-center aspect-square transition-colors"
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
    </div>
  );
};

export default Layout;
