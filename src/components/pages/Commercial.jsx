import { Card } from "react-bootstrap";
import image1 from "../img/object-1.png";
import image2 from "../img/object-2.png";
import image3 from "../img/object-3.png";
import image4 from "../img/object-4.png";

export default function Comercial() {
  return (
    <div className="col-8 m-auto">
      <div className="row d-flex justify-content-around">
        <div className="col-md-4 mb-2 p-2">
          <Card className="custom-card rounded-0">
            <Card.Img variant="top" src={image1} className="card-image" />
            <Card.Body className="bg-primary">
              <Card.Title className="custom-card-title">
                Wildstone Infra Hotel 1
              </Card.Title>
              <Card.Body className="custom-card-body">
                2715 Ash Dr. San Jose, South Dakota
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-2 p-2">
          <Card className="custom-card rounded-0">
            <Card.Img
              variant="top"
              src={image2}
              className="card-image rounded-0"
            />
            <Card.Body className="bg-primary">
              <Card.Title className="custom-card-title">
                Wildstone Infra Hotel 2
              </Card.Title>
              <Card.Body className="custom-card-body">
                2715 Ash Dr. San Jose, South Dakota
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row d-flex justify-content-around">
        <div className="col-md-4 mb-2 p-2">
          <Card className="custom-card rounded-0">
            <Card.Img
              variant="top"
              src={image3}
              className="card-image rounded-0"
            />
            <Card.Body className="bg-primary">
              <Card.Title className="custom-card-title">
                Wildstone Infra Hotel 3
              </Card.Title>
              <Card.Body className="custom-card-body">
                2715 Ash Dr. San Jose, South Dakota
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 mb-2 p-2">
          <Card className="custom-card rounded-0">
            <Card.Img
              variant="top"
              src={image4}
              className="card-image rounded-0"
            />
            <Card.Body className="bg-primary">
              <Card.Title className="custom-card-title">
                Wildstone Infra Hotel 4
              </Card.Title>
              <Card.Body className="custom-card-body">
                2715 Ash Dr. San Jose, South Dakota
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
