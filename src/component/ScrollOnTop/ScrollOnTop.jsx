import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollOnTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null; // This component renders nothing
};

export default ScrollOnTop;
