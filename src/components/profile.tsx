import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Profile = () => {
  return (
    <div className="fixed 2xl:left-[5%] 2xl:visible invisible top-64">
      <div className=" flex items-center justify-center">
        <StaticImage
          className=" w-44 aspect-square shadow-md rounded-full"
          src="../images/hunman.jpg"
          alt="hunman image"
        />
      </div>
      <div className=" space-y-5 pt-5 text-lg text-gray-700 w-full dark:text-white">
        <div>안녕하세요👏</div>
        <div>
          개발자 <span className="hover:text-purple-700">정성훈</span>
          입니다.
        </div>
      </div>
    </div>
  );
};

export default Profile;
