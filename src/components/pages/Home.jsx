import Carousel from "../carousels/Carousel-home";

function Home() {
  return (
    <section id="home">
      <div className="container-fluid h-100">
        <div className="row h-100 ">
          <div className="col-lg-12 p-0 m-0 texting-hero  ">
            <h1 className="hero-text ">
              Building things
              <br /> is our mission.
            </h1>
          </div>
          <div
            className="col-lg-12 p-0 m-0  some-text
          d-flex align-items-end justify-content-end"
          >
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
