import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const ScrollToTopButton = () => {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const showButtonThreshold = 1000;

      setButtonVisible(scrollPosition > showButtonThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="primary"
      onClick={scrollToTop}
      className="button-fixed"
      style={{
        display: buttonVisible ? "block" : "none",
      }}
    >
      &#8593;
    </Button>
  );
};

export default ScrollToTopButton;
