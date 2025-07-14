import React, { useState } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import MovieList from "./MovieList";
import Filter from "./Filter";
import MovieDetail from "./MovieDetail";
import moviesData from "./movies";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailerURL: ""
  });

  const handleAddMovie = () => {
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating &&
      newMovie.trailerURL
    ) {
      setMovies([
        ...movies,
        {
          ...newMovie,
          rating: Number(newMovie.rating),
          id: movies.length + 1 // simple id
        }
      ]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "", trailerURL: "" });
    }
  };

  const filteredMovies = movies.filter(
    movie =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === "" || movie.rating >= Number(filterRate))
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div
            className="App"
            style={{
              minHeight: "100vh",
              background: "linear-gradient(135deg, #e0e7ff 0%, #f8fafc 100%)",
              backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
              paddingBottom: "3rem"
            }}
          >
            <header
              className="App-header"
              style={{
                padding: "2rem 0 0 0",
                textAlign: "center",
                background: "rgba(0,0,0,0.85)",
                borderBottomLeftRadius: "2rem",
                borderBottomRightRadius: "2rem",
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.13)",
                position: "relative",
                overflow: "hidden",
                borderTopLeftRadius: "0",
                borderTopRightRadius: "0"
              }}
            >
              {/* Cinematic lights effect */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "100%",
                pointerEvents: "none",
                zIndex: 0
              }}>
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, width: "50%", height: "100%",
                  background: "radial-gradient(circle at 20% 0%, #facc15cc 0%, transparent 70%)",
                  filter: "blur(8px)"
                }} />
                <div style={{
                  position: "absolute",
                  top: 0, right: 0, width: "50%", height: "100%",
                  background: "radial-gradient(circle at 80% 0%, #f472b6cc 0%, transparent 70%)",
                  filter: "blur(8px)"
                }} />
              </div>
              {/* Cinema curtain */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, width: "100%", height: "60px",
                background: "repeating-linear-gradient(90deg, #b91c1c 0 20px, #991b1b 20px 40px)",
                zIndex: 1,
                borderBottomLeftRadius: "2rem",
                borderBottomRightRadius: "2rem"
              }} />
              {/* Cinema icons */}
              <div style={{
                position: "relative",
                zIndex: 2,
                marginBottom: "0.5rem"
              }}>
                <span
                  role="img"
                  aria-label="film projector"
                  style={{
                    fontSize: "2.5rem",
                    marginRight: "1.5rem",
                    verticalAlign: "middle",
                    filter: "drop-shadow(0 2px 8px #fff8)"
                  }}
                >📽️</span>
                <span
                  role="img"
                  aria-label="popcorn"
                  style={{
                    fontSize: "3.5rem",
                    marginRight: "1.5rem",
                    verticalAlign: "middle",
                    animation: "popcorn-bounce 1.5s infinite"
                  }}
                >🍿</span>
                <span
                  role="img"
                  aria-label="clapper"
                  style={{
                    fontSize: "2.5rem",
                    verticalAlign: "middle",
                    filter: "drop-shadow(0 2px 8px #fff8)"
                  }}
                >🎬</span>
              </div>
              <h1 style={{
                textAlign: "center",
                color: "#fff",
                fontWeight: 900,
                letterSpacing: "2px",
                fontFamily: "'Luckiest Guy', cursive, sans-serif",
                textShadow: "2px 2px 16px #b91c1c, 0 0 24px #fff",
                zIndex: 2,
                position: "relative"
              }}>
                Welcome to the Cinema! <br /> <span style={{ fontSize: "2.2rem" }}>My Movie App</span>
              </h1>
              <Filter
                filterTitle={filterTitle}
                setFilterTitle={setFilterTitle}
                filterRate={filterRate}
                setFilterRate={setFilterRate}
              />
              <div
                style={{
                  textAlign: "center",
                  margin: "2rem auto",
                  background: "rgba(99,102,241,0.07)",
                  borderRadius: "1.5rem",
                  padding: "1.5rem",
                  maxWidth: "700px",
                  boxShadow: "0 2px 12px 0 rgba(99,102,241,0.09)"
                }}
              >
                <h2 style={{
                  color: "#1e3a8a",
                  marginBottom: "1.5rem",
                  fontFamily: "'Luckiest Guy', cursive, sans-serif",
                  letterSpacing: "1px"
                }}>
                  Add a New Movie 🍿
                </h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={newMovie.title}
                  onChange={e => setNewMovie({ ...newMovie, title: e.target.value })}
                  style={{ marginRight: "1rem", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #6366f1" }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  value={newMovie.description}
                  onChange={e => setNewMovie({ ...newMovie, description: e.target.value })}
                  style={{ marginRight: "1rem", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #6366f1" }}
                />
                <input
                  type="text"
                  placeholder="Poster URL"
                  value={newMovie.posterURL}
                  onChange={e => setNewMovie({ ...newMovie, posterURL: e.target.value })}
                  style={{ marginRight: "1rem", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #6366f1" }}
                />
                <input
                  type="number"
                  placeholder="Rating"
                  value={newMovie.rating}
                  onChange={e => setNewMovie({ ...newMovie, rating: e.target.value })}
                  min="0"
                  max="10"
                  style={{ marginRight: "1rem", padding: "0.5rem", width: "80px", borderRadius: "0.5rem", border: "1px solid #6366f1" }}
                />
                <input
                  type="text"
                  placeholder="Trailer URL (YouTube embed)"
                  value={newMovie.trailerURL}
                  onChange={e => setNewMovie({ ...newMovie, trailerURL: e.target.value })}
                  style={{ marginRight: "1rem", padding: "0.5rem", borderRadius: "0.5rem", border: "1px solid #6366f1" }}
                />
                <button
                  onClick={handleAddMovie}
                  style={{
                    padding: "0.5rem 1.5rem",
                    background: "linear-gradient(90deg, #6366f1 60%, #818cf8 100%)",
                    color: "#fff",
                    border: "none",
                    borderRadius: "0.5rem",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px 0 #6366f133",
                    cursor: "pointer",
                    transition: "background 0.2s"
                  }}
                >
                  Add Movie
                </button>
              </div>
            </header>
            <MovieList movies={filteredMovies} />
            <footer style={{
              textAlign: "center",
              marginTop: "3rem",
              color: "#fff",
              fontWeight: 700,
              letterSpacing: "1px",
              background: "rgba(0,0,0,0.85)",
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
              boxShadow: "0 -8px 32px 0 rgba(99,102,241,0.13)",
              padding: "2rem 0 1rem 0"
            }}>
              Made with <span role="img" aria-label="popcorn">🍿</span> and <span role="img" aria-label="film">🎞️</span> by Movie Fans
            </footer>
            {/* Animation keyframes */}
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
                @keyframes popcorn-bounce {
                  0%, 100% { transform: translateY(0);}
                  50% { transform: translateY(-18px);}
                }
              `}
            </style>
          </div>
        }
      />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default App;
