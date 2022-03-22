import  { useState, useEffect } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { IDetail } from "./interface";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CommentSection from './CommentSection';
import Form from './Form';
import { SingleComment } from "./SingleComment";


const BlogDetail = () => {

  const [postDetail, setPostDetail] = useState<Array<IDetail> | null>(null);
  console.log({postDetail});

  useEffect(() => {
    client.fetch(
    `*[_type == "blogDetail"]{
      title,
      slug,
      beforeContent,
      "blogImage": blogImage.asset->url,
      afterContent
    }`).then((data)=> setPostDetail(data));

  },[]);

  return (
    <div className="blog-detail ">
      <div className="blog-detail-hero d-flex align-items-center flex-column">
        <ul className="blog-detail-list list-unstyled  d-flex text-uppercase gap-3 pt-4">
          <li className="active">
            blog <HiOutlineArrowNarrowRight />
          </li>
          <li>
            blog single
            <HiOutlineArrowNarrowRight />
          </li>
        </ul>
        <h1 className="display-1 fw-bold pb-4">Blog Details</h1>
      </div>

      <div className="single-blog-detail py-5 ">
        <main>
        {postDetail && postDetail.map((detail) => (
        <div key={detail.title}>  
          <h1>{detail.title}</h1>
          <p>
          <PortableText value={detail.beforeContent}/>
          </p>
          <img src={detail.blogImage} alt="aflt" className="w-100 h-100" />
          <p className="pt-3">
           <PortableText value={detail.afterContent}/>
          </p>
          </div>
          ))}
       
         

          <div className="author">
            <div className="button-group py-5">
              <button className="btn text-dark bg-light text-uppercase mx-1">
                blog
              </button>
              <button className="btn text-dark bg-light text-uppercase mx-1">
                writer
              </button>
              <button className="btn text-dark bg-light text-uppercase mx-1">
                books
              </button>
              <button className="btn text-dark bg-light text-uppercase mx-1">
                pen
              </button>
            </div>
            <div className="author-detail d-flex">
              <SingleComment />
            </div>
          </div>
          <CommentSection />
   
          <Form />
        </main>
      
      </div>
    </div>
  );
};

export default BlogDetail;
