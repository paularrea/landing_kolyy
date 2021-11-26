import { useEffect } from "react";
import { navigate } from "gatsby";

export default () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    navigate("/collar-para-cuidar-mi-perro");
  }, []);
  return null;
};
