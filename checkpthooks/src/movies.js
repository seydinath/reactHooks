const movies = [
  {
    id: 1,
    title: "Inception",
    description: "A thief who steals corporate secrets through dream-sharing technology.",
    posterURL: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    rating: 8.8,
    trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    id: 2,
    title: "Breaking Bad",
    description: "A high school chemistry teacher turned methamphetamine producer.",
    posterURL: "https://www.crew-united.com/Media/Images/778/778819/778819.entity.jpg",
    rating: 9.5,
    trailerURL: "https://www.youtube.com/embed/HhesaQXLuRY"
  },
  {
    id: 3,
    title: "The Matrix",
    description: "A computer hacker learns about the true nature of his reality.",
    posterURL: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
    rating: 8.7,
    trailerURL: "https://www.youtube.com/embed/vKQi3bBA1y8"
  },
  {
    id: 4,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space.",
    posterURL: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
    rating: 8.6,
    trailerURL: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: 5,
    title: "The Dark Knight",
    description: "Batman faces the Joker, a criminal mastermind.",
    posterURL: "https://bdi.dlpdomain.com/album/9791026828419/couv/M385x862/the-dark-knight-returns.jpg",
    rating: 9.0,
    trailerURL: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },
  {
    id: 6,
    title: "Stranger Things",
    description: "A group of kids uncover supernatural mysteries in their town.",
    posterURL: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_SY679_.jpg",
    rating: 8.7,
    trailerURL: "https://www.youtube.com/embed/b9EkMc79ZSU"
  },
  {
    id: 7,
    title: "Game of Thrones",
    description: "Noble families vie for control of the Iron Throne.",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmXkEgBEIpr--0NRWTKqm_h0r8mfoiHmFRA&s",
    rating: 9.3,
    trailerURL: "https://www.youtube.com/embed/BpJYNVhGf1s"
  },
  {
    id: 8,
    title: "The Office",
    description: "A mockumentary sitcom about office workers.",
    posterURL: "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/03/the-office-poster-michael-scott.jpg",
    rating: 8.9,
    trailerURL: "https://www.youtube.com/embed/dkQ6WFOvP_A"
  },
  {
    id: 9,
    title: "Friends",
    description: "Follows the personal and professional lives of six friends.",
    posterURL: "https://media.vogue.fr/photos/656dff4f4bfd0e52156604ae/2:3/w_2560%2Cc_limit/143479391",
    rating: 8.4,
    trailerURL: "https://www.youtube.com/embed/hDNNmeeJs1Q"
  },
  {
    id: 10,
    title: "The Godfather",
    description: "The aging patriarch of an organized crime dynasty transfers control to his son.",
    posterURL: "https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg",
    rating: 9.2,
    trailerURL: "https://www.youtube.com/embed/sY1S34973zA"
  },
  {
    id: 11,
    title: "Pulp Fiction",
    description: "The lives of two mob hitmen, a boxer, and others intertwine.",
    posterURL: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg",
    rating: 8.9,
    trailerURL: "https://www.youtube.com/embed/s7EdQ4FqbhY"
  },
  {
    id: 12,
    title: "Forrest Gump",
    description: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of Forrest.",
    posterURL: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._AC_SY679_.jpg",
    rating: 8.8,
    trailerURL: "https://www.youtube.com/embed/bLvqoHBptjg"
  },
  {
    id: 13,
    title: "The Shawshank Redemption",
    description: "Two imprisoned men bond over a number of years.",
    posterURL: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
    rating: 9.3,
    trailerURL: "https://www.youtube.com/embed/6hB3S9bIaco"
  },
  {
    id: 14,
    title: "The Mandalorian",
    description: "A lone gunfighter makes his way through the outer reaches of the galaxy.",
    posterURL: "https://m.media-amazon.com/images/I/81lAPl9Fl0L._AC_SY679_.jpg",
    rating: 8.7,
    trailerURL: "https://www.youtube.com/embed/aOC8E8z_ifw"
  },
  {
    id: 15,
    title: "Black Mirror",
    description: "An anthology series exploring a twisted, high-tech world.",
    posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    rating: 8.8,
    trailerURL: "https://www.youtube.com/embed/jDiYGjp5iFg"
  },
  {
    id: 16,
    title: "The Crown",
    description: "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
    posterURL: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8aec3564-ad37-439e-9b9c-4b11ed041ecd_1080x1350.jpeg",
    rating: 8.6,
    trailerURL: "https://www.youtube.com/embed/JWtnJjn6ng0"
  },
  {
    id: 17,
    title: "Money Heist",
    description: "A criminal mastermind plans the biggest heist in history.",
    posterURL: "https://loyolamaroon.com/wp-content/uploads/2020/04/MoneyHeistPart4-608x900.jpg",
    rating: 8.2,
    trailerURL: "https://www.youtube.com/embed/p_PJbmrX4uk"
  },
  {
    id: 18,
    title: "Sherlock",
    description: "A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
    posterURL: "https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg",
    rating: 9.1,
    trailerURL: "https://www.youtube.com/embed/IrBKwzL3K7s"
  }
];

export default movies;