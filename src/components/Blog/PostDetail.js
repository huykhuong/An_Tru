import moment from "moment";
import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const Categories = dynamic(() => import("../../components/Blog/Categories"));
const Author = dynamic(() => import("../../components/Blog/Author"));

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-[#001D38] text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="paragraph mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-[#001D38] text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "heading-two":
        return (
          <h2 key={index} className="text-[#001D38] text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            className="mx-auto h-full w-full md:max-h-[630px] md:max-w-[630px]"
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <Fragment>
      <div className="shadow-md lg:p-8 py-10 lg:mb-20">
        {/* <div className="relative overflow-hidden shadow-md mb-6">
          <img
            src={post.featuredImage.url}
            alt={post.title}
            className="h-full w-full object-contain object-center shadow-lg md:max-h-[630px]"
          />
        </div> */}
        {/* Content div */}
        <div className="px-4 md:px-16 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="font-medium text-gray-700">
              <span className="paragraph align-middle">
                {moment(post.createdAt).format("DD MM, YYYY")}
              </span>
            </div>
          </div>
          <h1 className="lowerHeading">{post.title}</h1>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>

        <Categories categories={post.categories} />
        <Author author={post.author} />
      </div>
    </Fragment>
  );
};

export default PostDetail;
