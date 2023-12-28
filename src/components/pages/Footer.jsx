import logo from "../img/icon.png";
import fb from "../img/fb-icon.png";
import linkedin from "../img/linkedin-icon.png";
import twitter from "../img/twitter-icon.png";
import { Form } from "react-bootstrap";

export default function Footers() {
  return (
    <section>
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="icon-nav-footer col-md-6   ">
            <h5 className="p-2 mb-4 ">
              <strong className="footer-contact">Address: </strong>
              6391 Elgin St. Celina, Delaware 10299
            </h5>
            <h5 className="p-2 mb-4">
              <strong className="footer-contact">Phone:</strong> +1 (123)
              456-7890
            </h5>
            <h5 className="p-2 mb-2">
              <strong className="footer-contact">Email:</strong>{" "}
              example@example.com
            </h5>
            <a href="#nav" className=" d-flex align-items-center">
              <img
                src={logo}
                alt="Your Logo"
                className="img-fluid mt-3 p-2 mx-2"
                style={{ maxWidth: "100px" }}
              />
              <h3 className="footer-contact mt-4 ">The Box</h3>
            </a>
          </div>
          <div className="col-md-6 text-start">
            <h4 className="footer-contact mb-3">Newsletter:</h4>
            <Form className="d-flex mb-4">
              <Form.Group className="me-2">
                <Form.Control
                  className="rounded-0"
                  type="email"
                  placeholder="Your email here"
                />
              </Form.Group>
              <Form.Group>
                <button
                  className="btn btn-warning sub-button rounded-0 "
                  type="submit"
                >
                  Subscribe
                </button>
              </Form.Group>
            </Form>

            <h4 className="mb-2 pt-4 footer-contact">Social:</h4>
            <div className="d-flex pt-4 m-auto ">
              <a href="#" className="me-3  text-center">
                <img src={fb} alt="someone" />
              </a>
              <a href="#" className="me-3 text-center ">
                <img src={linkedin} alt="someone" />
              </a>
              <a href="#" className="text-center">
                <img src={twitter} alt="someone-in-home" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 bg-primary p-4">
        <div className="col-md-6  text-center">
          <h6 className="footer-copyright ">
            TheBox Company © 2023. All Rights Reserved
          </h6>
        </div>
      </div>
    </section>
  );
}
