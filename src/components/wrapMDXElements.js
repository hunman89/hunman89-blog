import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

const MyParagraph = (props) => <p {...props} className=" py-2" />;
const MyH1 = (props) => (
  <h1 {...props} className=" text-6xl font-medium py-10">
    {props.children}
  </h1>
);
const MyH2 = (props) => (
  <h2 {...props} className="text-3xl font-medium py-4">
    {props.children}
  </h2>
);
const MyH3 = (props) => (
  <h3 {...props} className="text-2xl font-medium py-4">
    {props.children}
  </h3>
);
const MyH4 = (props) => (
  <h4 {...props} className="text-xl font-medium py-4">
    {props.children}
  </h4>
);
const MyBlockquote = (props) => (
  <blockquote {...props} className=" bg-gray-300 p-1 italic" />
);
const MyUl = (props) => <p {...props} className=" p-2" />;

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  h4: MyH4,
  p: MyParagraph,
  blockquote: MyBlockquote,
  ul: MyUl,
};

const WrapMDXElements = ({ element }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{element}</MDXRenderer>
  </MDXProvider>
);

export default WrapMDXElements;
