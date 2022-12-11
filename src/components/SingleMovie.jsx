const SingleMovie = ({ movie }) => {
  return (
    <>
      <img
        src={movie.Poster}
        alt="..."
        style={{ width: "300px", height: "400px", objectFit: "cover" }}
      />
    </>
  );
};

export default SingleMovie;
