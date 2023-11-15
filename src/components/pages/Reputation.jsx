import plane from "../img/plane.png";
import icon from "../img/icon-about.png";

function Reputation() {
  return (
    <section id="reputation" className="text-center m-5 pt-5">
      <div className="container mt-5 ">
        <h4 className="text-center reputation">Our Reputation</h4>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 p-lg-0 p-3">
            <div className="text-start gap-2 d-flex flex-column justify-content-between flex-wrap border p-3 m-2 h-100">
              <img src={icon} alt="some icon" width="30" height="30" />
              <h4 className="teams">Best Services</h4>
              <p className="text-teams">
                Nullam senectus porttitor in eget. <br /> Eget rutrum leo
                interdum.
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-12 p-lg-0 p-3">
            <div className=" text-start gap-3 d-flex flex-column justify-content-between flex-wrap border p-3 m-2 h-100">
              <img src={icon} alt="some icon" width="30" height="30" />
              <h4 className="teams">Best Teams</h4>
              <p className="text-teams">
                Nullam senectus porttitor in eget. <br /> Eget rutrum leo
                interdum.
              </p>
            </div>
          </div>
          <div className="col-lg-4  col-md-6 col-sm-12 p-lg-0 p-3">
            <div className=" text-start gap-3  d-flex flex-column justify-content-between flex-wrap border p-3 m-2 h-100">
              <img src={plane} alt="some icon" width="30" height="30" />
              <h4 className="teams">Best Designs</h4>
              <p className="text-teams">
                Nullam senectus porttitor in eget. <br /> Eget rutrum leo
                interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reputation;
