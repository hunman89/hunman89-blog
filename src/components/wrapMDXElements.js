import * as React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

const MyParagraph = (props) => <p {...props} className=" py-1" />;
const MyH1 = (props) => (
  <h1 {...props} className=" text-6xl font-medium py-10">
    {props.children}
  </h1>
);
const MyH2 = (props) => (
  <h2 {...props} className="text-3xl font-medium py-1">
    {props.children}
  </h2>
);
const 

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyParagraph,
};

const WrapMDXElements = ({ element }) => (
  <MDXProvider components={components}>
    <MDXRenderer>{element}</MDXRenderer>
  </MDXProvider>
);

export default WrapMDXElements;
