import { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
// pages
import Commercial from "./Commercial";
import Residential from "./Residential";
import Other from "./Other";
// images
import image1 from "../img/object-1.png";
import image2 from "../img/object-2.png";
import image3 from "../img/object-3.png";
import image4 from "../img/object-4.png";

export default function Projects() {
  const [currentCategory, setCurrentCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  const ProjectCard = ({ imgSrc, title, location }) => (
    <div className="col-md-4 mb-2 p-2">
      <Card className="custom-card rounded-0">
        <Card.Img variant="top" src={imgSrc} className="card-image rounded-0" />
        <Card.Body className="bg-primary">
          <Card.Title className="custom-card-title">{title}</Card.Title>
          <Card.Body className="custom-card-body">{location}</Card.Body>
        </Card.Body>
      </Card>
    </div>
  );

  ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  };

  const renderProjects = () => {
    if (currentCategory === "Commercial") {
      return <Commercial />;
    } else if (currentCategory === "Residential") {
      return <Residential />;
    } else if (currentCategory === "Other") {
      return <Other />;
    }

    return (
      <div className="col-md-8">
        <div className="row d-flex justify-content-around">
          <ProjectCard
            imgSrc={image2}
            title="Wildstone Infra Hotel 4"
            location="2715 Ash Dr. San Jose, South Dakota"
          />
          <ProjectCard
            imgSrc={image1}
            title="Wildstone Infra Hotel 4"
            location="2715 Ash Dr. San Jose, South Dakota"
          />
        </div>
        <div className="row d-flex justify-content-around">
          <ProjectCard
            imgSrc={image3}
            title="Mr. Parkinston’s House"
            location="273517 W. Gray St. Utica, Pennsylvania"
            k
          />
          <ProjectCard
            imgSrc={image4}
            title="Mr. Parkinston’s House"
            location="273517 W. Gray St. Utica, Pennsylvania"
          />
        </div>
        <div className="col-8  w-100 d-flex justify-content-around pb-5 ">
          <button className="  btn btn-dark px-5 p-3 btn-lg text-center rounded-0 ">
            <span>&#8592; </span> Back
          </button>
          <button className="btn btn-lg btn-dark px-5 text-center rounded-0 ">
            Next <span>&#8594; </span>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <section id="projects" className="pb-4">
        <div className="container-fluid ">
          <h1 className="projects px-5 pt-5">Projects</h1>
          <div className="row px-5">
            <div className="nav-links col-md-4 p-3 mt-4 ">
              <Nav.Link
                className={`my-2 ${currentCategory === "All" && "active"}`}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </Nav.Link>
              <Nav.Link
                className={`my-2 ${
                  currentCategory === "Commercial" && "active"
                }`}
                onClick={() => handleCategoryChange("Commercial")}
              >
                Commercial
              </Nav.Link>
              <Nav.Link
                className={`my-2 ${
                  currentCategory === "Residential" && "active"
                }`}
                onClick={() => handleCategoryChange("Residential")}
              >
                Residential
              </Nav.Link>
              <Nav.Link
                className={`my-2 ${currentCategory === "Other" && "active"}`}
                onClick={() => handleCategoryChange("Other")}
              >
                Other
              </Nav.Link>
            </div>
            {renderProjects()}
          </div>
        </div>
      </section>
    </div>
  );
}
