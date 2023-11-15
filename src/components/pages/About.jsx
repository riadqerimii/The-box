import Container from "react-bootstrap/Container";
import about from "../img/ceo.jpg";
function About() {
  return (
    <section id="about" className="pt-5">
      <Container>
        <div className="row mt-5">
          <div className="col-lg-8">
            <div className="about-img">
              <img src={about} alt="image of ceo" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="d-flex flex-column justify-content-between text-start p-5  text-about">
              <h4 className="about-text my-1 ">About Us</h4>
              <p className="about-p my-5">
                For more than 30 years, we have been delivering world-class
                construction, and weve built many lasting relationships along
                the way. Weve matured into an industry leader and trusted
                resource for those seeking quality, innovation, and reliability
                when building in the U.S.
              </p>
              <button className="border button-about ">
                More on Our History
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
