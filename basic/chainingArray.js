const movies = [
  {
    title: "movie 1",
    year: 2020,
    rating: 4,
  },
  {
    title: "movie 2",
    year: 2020,
    rating: 4.5,
  },
  {
    title: "movie 3",
    year: 2020,
    rating: 4.3,
  },
];

const result = movies
  .filter((m) => m.year === 2020 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => `${m.title}(${m.year}, ${m.rating})`);

console.log(result);
