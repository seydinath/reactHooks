import React from "react";

function Filter({ filterTitle, setFilterTitle, filterRate, setFilterRate }) {
  // Example movie titles for the dropdown (replace with your own or generate dynamically)
  const movieTitles = [
    "",
    "Inception",
    "Breaking Bad",
    "The Matrix",
    "Interstellar",
    "The Dark Knight",
    "Stranger Things",
    "Game of Thrones",
    "The Office",
    "Friends",
    "The Godfather",
    "Pulp Fiction",
    "Forrest Gump",
    "The Shawshank Redemption",
    "The Mandalorian",
    "Black Mirror",
    "The Crown",
    "Money Heist",
    "Sherlock"
  ];

  return (
    <div style={{ margin: "2rem", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Filter by title or type here"
        value={filterTitle}
        onChange={e => setFilterTitle(e.target.value)}
        style={{ marginRight: "1rem", padding: "0.5rem", width: "180px" }}
        list="movie-titles"
      />
      <datalist id="movie-titles">
        {movieTitles.slice(1).map(title => (
          <option key={title} value={title} />
        ))}
      </datalist>
      <select
        value={filterRate}
        onChange={e => setFilterRate(e.target.value)}
        style={{ padding: "0.5rem", width: "140px" }}
      >
        <option value="">All Ratings</option>
        <option value="10">10+</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
        <option value="5">5+</option>
      </select>
    </div>
  );
}

export default Filter;