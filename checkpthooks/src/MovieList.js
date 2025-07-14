import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return (
      <div style={{ textAlign: "center", color: "#6366f1", fontSize: "1.3rem", marginTop: "2rem" }}>
        Aucun film trouvé.
      </div>
    );
  }
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;