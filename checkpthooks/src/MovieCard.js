import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
  const [flipped, setFlipped] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  // Redirection vers la page de détail au clic sur la carte (hors boutons)
  const handleCardClick = (e) => {
    // Si le clic est sur un bouton, ne pas naviguer
    if (e.target.tagName === "BUTTON" || e.target.tagName === "A") return;
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      style={{
        perspective: "1200px",
        width: "260px",
        margin: "1.5rem",
        display: "inline-block",
        verticalAlign: "top"
      }}
    >
      <div
        onClick={handleCardClick}
        style={{
          transition: "transform 0.7s cubic-bezier(.4,2,.6,1)",
          transformStyle: "preserve-3d",
          position: "relative",
          width: "100%",
          height: "410px",
          cursor: "pointer",
          transform: flipped ? "rotateY(180deg)" : "none",
          boxShadow: flipped
            ? "0 8px 32px 0 #6366f1bb"
            : "0 2px 12px 0 #6366f133"
        }}
        title="Click to view details!"
      >
        {/* Front Side */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #e0e7ff 60%, #f1f5f9 100%)",
            borderRadius: "1.5rem",
            overflow: "hidden",
            zIndex: 2,
            border: liked ? "3px solid #22c55e" : "3px solid transparent",
            boxShadow: liked
              ? "0 0 18px #22c55e77"
              : "0 2px 12px 0 #6366f133"
          }}
        >
          <img
            src={movie.posterURL}
            alt={movie.title}
            style={{
              width: "100%",
              height: "260px",
              objectFit: "cover",
              borderTopLeftRadius: "1.5rem",
              borderTopRightRadius: "1.5rem",
              borderBottom: "4px solid #6366f1"
            }}
          />
          <div
            style={{
              padding: "1.2rem",
              background: "rgba(255,255,255,0.85)",
              borderBottomLeftRadius: "1.5rem",
              borderBottomRightRadius: "1.5rem",
              textAlign: "center"
            }}
          >
            <h3 style={{ color: "#1e3a8a", marginBottom: "0.5rem" }}>
              {movie.title}
            </h3>
            <p style={{ color: "#1e3a8a", margin: 0 }}>
              <strong>Rating:</strong> {movie.rating}
            </p>
            <button
              onClick={e => {
                e.stopPropagation();
                setLiked(l => !l);
              }}
              style={{
                marginTop: "1rem",
                background: liked
                  ? "linear-gradient(90deg,#22c55e 60%,#4ade80 100%)"
                  : "linear-gradient(90deg,#6366f1 60%,#818cf8 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "44px",
                height: "44px",
                fontSize: "1.5rem",
                boxShadow: liked
                  ? "0 0 12px #22c55e"
                  : "0 2px 8px 0 #6366f133",
                cursor: "pointer",
                outline: "none",
                transition: "background 0.2s, box-shadow 0.2s"
              }}
              title={liked ? "Unlike" : "Like"}
            >
              {liked ? "💚" : "🤍"}
            </button>
            <div style={{ fontSize: "0.85rem", marginTop: "0.7rem", color: "#64748b" }}>
              <em>Cliquez pour voir la description et la bande-annonce</em>
            </div>
          </div>
        </div>
        {/* Back Side (optionnel, peut être retiré si navigation directe) */}
        {/*
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #f1f5f9 60%, #e0e7ff 100%)",
            borderRadius: "1.5rem",
            overflow: "hidden",
            transform: "rotateY(180deg)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
          }}
        >
          <h3 style={{ color: "#1e3a8a", marginBottom: "1rem" }}>
            {movie.title}
          </h3>
          <p style={{ color: "#1e3a8a", fontWeight: 600, marginBottom: "0.7rem" }}>
            <span role="img" aria-label="star">⭐</span> {movie.rating}
          </p>
          <p style={{
            color: "#1e3a8a",
            fontSize: "1rem",
            marginBottom: "1.2rem",
            textAlign: "center"
          }}>
            {movie.description}
          </p>
          <a
            href={movie.posterURL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#6366f1",
              textDecoration: "underline",
              fontSize: "0.95rem"
            }}
          >
            View Poster
          </a>
          <button
            onClick={e => {
              e.stopPropagation();
              setFlipped(false);
            }}
            style={{
              marginTop: "1.5rem",
              background: "linear-gradient(90deg,#6366f1 60%,#818cf8 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "1rem",
              padding: "0.5rem 1.5rem",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 2px 8px 0 #6366f133"
            }}
          >
            Back
          </button>
        </div>
        */}
      </div>
    </div>
  );
}

export default MovieCard;