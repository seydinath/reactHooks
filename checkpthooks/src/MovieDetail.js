import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "./movies";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviesData.find(m => String(m.id) === id);

  if (!movie) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Film non trouvé.</div>;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "2rem" }}>
      <button
        onClick={() => navigate("/")}
        style={{ marginBottom: "2rem", padding: "0.5rem 1.5rem", borderRadius: "0.5rem", background: "#6366f1", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}
      >
        ← Retour à l'accueil
      </button>
      <div style={{ maxWidth: "700px", margin: "0 auto", background: "#fff", borderRadius: "1.5rem", boxShadow: "0 2px 12px 0 rgba(99,102,241,0.09)", padding: "2rem" }}>
        <h2 style={{ color: "#1e3a8a", fontFamily: "'Luckiest Guy', cursive, sans-serif" }}>{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} style={{ width: "220px", borderRadius: "1rem", marginBottom: "1rem" }} />
        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>{movie.description}</p>
        <p><strong>Note :</strong> {movie.rating}/10</p>
        {movie.trailerURL && (
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ color: "#6366f1" }}>Bande-annonce :</h3>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
              <iframe
                src={movie.trailerURL}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "1rem" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetail;
