import home from "../img/home.png";
import bag from "../img/bag.png";
import renovation from "../img/renovation.png";
import man from "../img/man.png";
import consultant from "../img/consultant.png";
import electric from "../img/electricity.png";
import { Card } from "react-bootstrap";

function Services() {
  return (
    <section id="services" className="p-5 ">
      <h4 className=" services-text m-auto mb-4 p-5">Services</h4>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-3 py-2 ">
            <Card className="text-center shadow hover-cards ">
              <Card.Body
                className="d-flex flex-column align-items-center bg-white rounded-2"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={home}
                      alt="Construction"
                      style={{ width: "29.27px", height: "29.27px" }}
                    />
                  </div>
                  <span
                    className="span mb-2 mt-3"
                    style={{
                      border: "2px solid blue ",
                      width: "70%",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "rgba(41, 71, 169, 1)" }}
                  >
                    Construction
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mb-3 py-2">
            <Card className="text-center shadow hover-cards">
              <Card.Body
                className="d-flex flex-column align-items-center bg-primary  rounded-2"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={renovation}
                      alt="Construction"
                      style={{ width: "29.27px", height: "29.27px" }}
                    />
                  </div>
                  <span
                    className="mb-2 mt-3"
                    style={{
                      border: "2px solid white ",
                      width: "70%",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "#fff" }}
                  >
                    Renovation
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mb-3 py-2">
            <Card className="text-center shadow hover-cards ">
              <Card.Body
                className="d-flex flex-column align-items-center bg-white  rounded-2"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={consultant}
                      alt="Construction"
                      style={{ width: "29.27px", height: "29.27px" }}
                    />
                  </div>
                  <span
                    className="mb-2 mt-3"
                    style={{
                      border: "2px solid blue ",
                      width: "70%",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "rgba(41, 71, 169, 1)" }}
                  >
                    Consultant
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mb-3 py-2">
            <Card className="text-center shadow hover-cards ">
              <Card.Body
                className="d-flex flex-column align-items-center bg-primary  rounded-2"
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={bag}
                      alt="Construction"
                      style={{ width: "29.27px", height: "29.27px" }}
                    />
                  </div>
                  <span
                    className="mb-2 mt-3"
                    style={{
                      border: "2px solid white ",
                      width: "70%",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "white" }}
                  >
                    Repair Construction
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mb-3 py-2">
            <Card className="text-center shadow hover-cards ">
              <Card.Body
                className="d-flex flex-column align-items-center bg-white rounded-2 "
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={man}
                      alt="Construction"
                      style={{ width: "29.27px", height: "29.27px" }}
                    />
                  </div>
                  <span
                    className="mb-2 mt-3"
                    style={{
                      border: "2px solid blue ",
                      width: "70%",
                      margin: "10px 0",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "rgba(41, 71, 169, 1)" }}
                  >
                    Architecture
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4 mb-3 py-2">
            <Card className="text-center shadow hover-cards ">
              <Card.Body
                className="d-flex flex-column align-items-center bg-primary rounded-2 "
                style={{ height: "100%" }}
              >
                <div
                  className="d-flex flex-column align-items-center justify-content-center m-3 p-2"
                  style={{ height: "100%" }}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={electric}
                      alt="Construction"
                      style={{
                        width: "29.27px",
                        height: "29.27px",
                        color: "blue",
                      }}
                    />
                  </div>
                  <span
                    className="mb-2 mt-3"
                    style={{
                      border: "2px solid white ",
                      width: "70%",
                      margin: "10px 0",
                    }}
                  ></span>
                  <h5
                    className="mt-2 text-cards-white mb-4"
                    style={{ color: "#fff" }}
                  >
                    Electric
                  </h5>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
