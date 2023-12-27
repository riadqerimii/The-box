// Carousel.jsx
import { useState } from "react";

const Carousel = () => {
  const projectData = [
    {
      project: "Feature Project 1",
      university: "The National University of Architecture",
    },
    {
      project: "Feature Project 2",
      university: "Another University",
    },
    {
      project: "Feature Project 3",
      university: "Yet Another University",
    },
    {
      project: "Feature Project 4",
      university: "One More University",
    },
    {
      project: "Feature Project 5",
      university: "Final University",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projectData[currentIndex];

  return (
    <div className=" p-0 m-0 home-card">
      <div className="card-text">
        <h4 className="project m-2 ">{currentProject.project}</h4>
        <h3 className="university mb-2">{currentProject.university}</h3>
        <div className="d-flex   buttons">
          <button onClick={handleBack}>
            <span>&#8592;</span> Back
          </button>
          <button onClick={handleNext}>
            Next <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
