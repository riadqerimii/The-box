export default function Consultation() {
  return (
    <section id="consultation">
      <div className="container consultation-bg pt-2">
        <div className="row p-5 pt-5 mt-5">
          <div className="col-8 col-md-8 col-sm-12 p-2 ">
            <h4 className="free-text">
              Free consultation with exceptional quality
            </h4>
            <p className="py-4 my-5 free-text-p">
              Just one call away{" "}
              <a className="free-text-number" href="+84 1102 2703">
                +84 1102 2703
              </a>
            </p>
          </div>
          <div className="col-4 col-md-4 col-sm-12 p-5 my-4 text-center  align-items-center rounded-0 d-flex m-auto button-text">
            <button className=" btn btn-transparent button-get">
              Get your consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
