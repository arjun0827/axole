import React, { useState, useEffect } from "react";
import client from "../client";
import { AboutPost } from "./interface";
import { PortableText } from "@portabletext/react";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {FaPhotoVideo,FaInternetExplorer} from "react-icons/fa";
import {GiNotebook} from "react-icons/gi";
import {Testimonial} from "./Testimonial";
import {Swipers} from "./Swipers";


const About = () => {
  const [aboutData, setAboutData] = useState<Array<AboutPost> | null>(null);
  console.log({ aboutData});
 
  useEffect(() => {
    client.fetch(
      `*[_type == "about"]{
        title,
        slug,
        "image": image.asset->url,
        body,
        bodyContent,
        "authorImage": authorImage.asset->url,
        authorName,
        authorProfile,
        authorContent
      }`
    ).then((data) => setAboutData(data));
  }, []);

  return (
    <div className="about  pb-5">
      {aboutData && aboutData.map((about)=> (
      <React.Fragment key={about.title}><div className="about-hero d-flex flex-column align-items-center " >
          <ul className="about-list list-unstyled  d-flex text-uppercase gap-3 pt-4">
            <li className="active">
              home <HiOutlineArrowNarrowRight />
            </li>
            <li>
              about
              <HiOutlineArrowNarrowRight />
            </li>
          </ul>
          <h1 className="display-1 fw-bold pb-4">About.</h1>
        </div><main>
            <div className="row pb-5 m-0">
              <div className="col-md-6 col-12 about-inner-main">
                <img src={about.image} alt="" className="w-100" />
              </div>
              <div className="col-12 col-md-6">
                <div className="about-content p-0 p-md-5">
                  <p className="text-uppercase">i'm nicole kate perrry</p>
                  <h1 className="display-4 fw-normal pb-4">
                    {about?.title}
                  </h1>

                  <div className="hobbies ">
                    <div className="d-flex  p-4 mb-2 hobby">
                      <GiNotebook className="me-5 about-icons" />

                      <div>
                        <h4>Writter & Blogger</h4>
                        <p>
                         <PortableText value={about?.body}/>
                      </p>
                      </div>
                    </div>

                    <div className="d-flex p-4 mb-2 hobby">
                      <FaPhotoVideo
                        className="me-5 about-icons" />

                      <div>
                        <h4>Photographer</h4>
                        <p>
                         <PortableText value={about?.body}/>
                      </p>
                      </div>
                    </div>

                    <div className="d-flex  p-4 hobby">
                      <FaInternetExplorer className="me-5 about-icons" />

                      <div>
                        <h4>Explorer and Traveler</h4>
                        <p>
                         <PortableText value={about?.body}/>
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-txt d-flex justify-content-center">
              <p className=" text-md-center text-start py-5 px-3">
                <PortableText value={about?.bodyContent}/>
              </p>
            </div>
            <Testimonial />
            <Swipers />
          </main></React.Fragment>
      ))}
    </div>
  );
};

export default About;
