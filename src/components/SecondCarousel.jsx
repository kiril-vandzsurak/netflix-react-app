import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";
import Carousel from "react-bootstrap/Carousel";
import { Spinner } from "react-bootstrap";

const SecondCarousel = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    saveData();
  }, []);

  const saveData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=34d3d0dc&s=lord of rings"
      );
      if (response.ok) {
        let data = await response.json();
        setMovies(data.Search);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const firstPart = movies.slice(1, 4);
  const secondPart = movies.slice(4, 7);
  const thirdPart = movies.slice(7, 10);

  return (
    <>
      {loading && (
        <div className="ml-2">
          <Spinner animation="border" variant="success" />
        </div>
      )}
      <Carousel className="mt-5">
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {firstPart.map((element) => (
              <SingleMovie movie={element} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {secondPart.map((element) => (
              <SingleMovie movie={element} />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {thirdPart.map((element) => (
              <SingleMovie movie={element} />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default SecondCarousel;
