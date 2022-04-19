import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { cls } from "../libs/utils";
import Profile from "./profile";
import FloatingButtons from "./floatingButtons";

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
                        {pageTitle}
                    </h1>
                    <nav>
                        <Link
                            to="/"
                            className={cls(
                                "font-medium sm:text-xl ",
                                pageTitle === "Hunman Blog"
                                    ? " invisible"
                                    : "text-gray-300 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                            )}
                        >
                            Home
                        </Link>
                    </nav>
                </div>
                <Profile />
                <div className="w-full xl:max-w-5xl m-auto">
                    <main className="sm:px-10">{children}</main>
                </div>
                <FloatingButtons theme={theme} setTheme={setTheme} />
            </div>
        </div>
    );
};

export default Layout;
