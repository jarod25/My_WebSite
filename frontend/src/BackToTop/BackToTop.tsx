import "./BackToTop.css";
import ArrowCircleUpRoundedIcon from "@mui/icons-material/ArrowCircleUpRounded";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [backToTopButton, setBackToTopButton] = useState(
    document.getElementById("backToTop")!
  );

  window.onscroll = function () {
    isScrolling();
  };

  useEffect(() => {
    setBackToTopButton(document.getElementById("backToTop")!);
  }, []);

  const isScrolling = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  const goToTop = () => {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for all other browsers
  };

  return (
    <button className="round-shape" id="backToTop" onClick={goToTop}>
      <ArrowCircleUpRoundedIcon sx={{ fontSize: 30 }} />
    </button>
  );
};
