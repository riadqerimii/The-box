import hands from "../img/hands.png";
import book from "../img/book.png";
import cup from "../img/cup.png";
import planbook from "../img/plan-book.png";

export default function Experience() {
  return (
    <section id="experience" className="py-5 ">
      <div className="container py-5   ">
        <div className="row py-5  ">
          <div className="col-lg-7  ">
            {/* card  1 */}
            <div className="d-flex justify-content-center ">
              <div className=" card-1 p-3 rounded-2 bg-white">
                <img className="card-1-icon" src={hands} alt="hands" />
                <h1 className="card-1-number ">84</h1>
                <h4 className="card-1-text p-2 mx-1">Happy Clients</h4>
              </div>
            </div>
            {/* card 2 */}
            <div className="d-flex   justify-content-center rounded-2">
              <div className="card-2 p-3">
                <img className="card-2-icon" src={book} alt="book" />
                <h1 className="card-2-number">123</h1>
                <h4 className="card-2-text p-2 m-2">Projects Completed</h4>
              </div>
            </div>
            {/* card 3 */}
            <div className="d-flex justify-content-center rounded-2  ">
              <div className="card-3 p-3">
                <img className="card-3-icon" src={cup} alt="award cup" />
                <h1 className="card-3-number p-1 ">37</h1>
                <h4 className="p-2 m-2 card-3-text">Awards Win</h4>
              </div>
            </div>
            {/* card 4 */}
            <div className="d-flex justify-content-center rounded-2">
              <div className="p-3 card-4">
                <img className="card-4-icon" src={planbook} alt="book plan" />
                <h1 className="p-1 card-4-number ">30</h1>
                <h4 className="p-2 m-2 card-4-text">Years in Business</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="py-5">
              <h2 className="experience-h2">30 Years Experience</h2>
              <h4 className="experience-h4 py-3 ">
                Our company has been the leading provided construction services
                to clients throughout the USA since 1988.
              </h4>
              <button className="btn btn-primary rounded-0 p-2 my-4 m-1 px-5 experience-button ">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
