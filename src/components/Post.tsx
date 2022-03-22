import HeroWrap from "./HeroWrap";
import { BsPersonFill } from "react-icons/bs";
import {
  FaCalendarAlt,
  FaComment,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import React, { useState, useEffect } from "react";
import client from "../client";
import { IPost } from "./interface";
import { PortableText } from "@portabletext/react";
import { NavLink } from "react-router-dom";

const Post = () => {
  const [postData, setPostData] = useState<Array<IPost> | null>(null);
  console.log({ postData });

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(_createdAt) {
            title,
            slug,
            "mainImage": mainImage.asset->url,
            body
        }`
      )
      .then((data) => setPostData(data));
  }, []);

  return (
      
    <div className="blog">
      <HeroWrap />
      {postData &&
        postData.map((post, index) => (
    
          <main className="container-md container-fluid " key={post.slug.current}>
            {console.log(post.slug.current)}
            <div className="d-flex row p-0 m-0 ">
              <div
                className={`col-12 col-md-7 p-0 post-inner-main ${
                  (index + 1) % 2 === 0 ? "order-2" : "order-1"
                }`}
              >
                <img src={post.mainImage} alt="" />
              </div>
              <div
                className={`col-12 col-md-5 ${
                  (index + 1) % 2 === 0 ? "order-1" : "order-2"
                }`}
              >
                <div className="blog-data  pt-5 mt-5 ">
                  <p>
                    <span className="text-uppercase">
                      <span className="ps-3 pe-2">
                        <BsPersonFill color="#F4BF2C" />
                      </span>
                      admin
                    </span>
                    <span className="text-uppercase">
                      <span className="ps-3 pe-2">
                        <FaCalendarAlt color="#F4BF2C" />
                      </span>
                      Jan. 30,2021
                    </span>
                    <span className="text-uppercase">
                      <span className="ps-3 pe-2">
                        <FaComment color="#F4BF2C" />
                      </span>
                      3 comments
                    </span>
                  </p>

                   <NavLink to={"/blog-detail"}>
                     <p className="blog-heading text-dark">{post.title}</p>
                    
                   </NavLink>
                  <div className="blog-content  py-3">
                    <PortableText value={post.body} />
                  </div>
                
                  <p>
                    Learn More
                    <span className="px-3">
                      {" "}
                      <HiOutlineArrowNarrowRight />
                    </span>
                  </p>
                </div
                >
              </div>
            </div>
          </main>
        ))}

      <div className="py-5">
        <ul className="blog-list d-flex justify-content-center list-unstyled">
          <li className="py-2 px-3 mx-2">
            <div className="icons-color">
              <FaChevronLeft color="black" />
            </div>
          </li>
          <li className="active text-white">1</li>
          <li className="py-2 px-3 mx-2">2</li>
          <li className="py-2 px-3 mx-2">3</li>
          <li className="py-2 px-3 mx-2">4</li>
          <li className="py-2 px-3 mx-2">5</li>
          <li className="py-2 px-3 mx-2">
            <FaChevronRight color="black" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
