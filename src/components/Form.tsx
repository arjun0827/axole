const Form = () => {
  return (
    <div className="">
      <h1 className="py-5 fw-normal">Leave a comment</h1>

      <div className="form bg-white p-5">
        <div className="pb-3 d-flex gap-4">
          <div className="d-flex flex-column w-50">
            <label className="form-label text-uppercase">Name</label>
            <input type="text" className="form-control py-2" />
          </div>
          <div className="d-flex flex-column w-50">
            <label className="form-label  text-uppercase">Email</label>
            <input type="email" className="form-control py-2" />
          </div>
        </div>
        <div className="pb-3">
          <label className="form-label text-uppercase">Website</label>
          <input type="text" className="form-control py-2" />
        </div>
        <div className="pb-3">
          <label className="form-label text-uppercase">Message</label>
          <textarea className="form-control" rows={10}></textarea>
        </div>
        <button className="btn bg-warning py-3 px-4 fw-bold">
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default Form;
