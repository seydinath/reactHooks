import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie, idx) => (
        <MovieCard key={idx} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;