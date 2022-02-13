import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Main">
      <div className="sm:flex items-center justify-center sm:space-x-10">
        <div className=" flex items-center justify-center">
          <StaticImage
            className=" w-60 aspect-square shadow-md rounded-full"
            src="../images/hunman.jpg"
            alt="hunman image"
          />
        </div>
        <div className=" sm:space-y-5 pt-5 sm:pt-0 text-xl text-gray-700 w-full dark:text-white">
          <div>안녕하세요👏</div>
          <div>
            <span className="font-bold">새로운 것</span>에 도전🤩 하기를
            두려워하지 않고
          </div>
          <div>즐겁게 코딩💻 하는</div>
          <div>
            개발자 <span className="hover:text-purple-700">정성훈</span> 입니다.
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
