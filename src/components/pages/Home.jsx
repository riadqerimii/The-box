import Carousel from "../carousels/Carousel-home";

function Home() {
  return (
    <section id="home">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-8  col-sm-4 h-100 d-flex flex-column justify-content-center">
            <h1 className="hero-text">
              Building things
              <br /> is our mission.
            </h1>
          </div>
          <div className="col-lg-4  col-sm-8">
            <div className="row">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
