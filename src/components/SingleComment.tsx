import  { useState, useEffect } from "react";
import client from "../client";
import { PortableText } from "@portabletext/react";
import { IAuthor } from "./interface";


export const SingleComment = () => {

  const [author , setAuthor] = useState<Array<IAuthor> | null>(null);
  console.log({author});

  useEffect(() => {
    client.fetch(
      `*[_type == "author"]{
        name,
        slug,
        "image": image.asset->url,
        bio,
      }`
    ).then((data) => setAuthor(data));
  })
  return (
    <div className="single-comment py-3">
      {
      author && author.map((authors) =>(
        <div className="d-flex py-4">
        <img src={authors.image} alt="persons" className="me-4"/>

        <div>
          <h5>{authors.name}</h5>
          <p className="text-uppercase">
            <small>january 31, 2021 at 10:20am</small>
          </p>
          <p>
           <PortableText value={authors.bio}/>
          </p>
          <button className="btn text-white bg-dark text-uppercase py-0 fw-bold"><small>reply</small></button>
        </div>
      </div>
      ))
      }

    </div>
  )
}
