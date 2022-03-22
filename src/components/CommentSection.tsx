import { SingleComment } from "./SingleComment";

const CommentSection = () => {

  return (
    <div className="comment-section py-5">
      <h1 className="fw-normal py-5">6 Comments</h1>
    <div>
    <SingleComment />
    <SingleComment />
    <div className="ps-5">
    <SingleComment />
    </div>

    <div className="ps-5 ms-5">
    <SingleComment />
    </div>
    <SingleComment />
    </div>
      
    </div>
  );
};

export default CommentSection;
