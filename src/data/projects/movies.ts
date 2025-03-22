export const movies = {
  image: 'movies-project',
  date: 'Dec 2022',
  name: 'Movies',
  tech: [
    { image: '/svg/html5.svg', name: 'HTML5', width: '34.29', height: '40' },
    {
      image: '/svg/sass.svg',
      name: 'SCSS: 1.57.0',
      width: '53.38',
      height: '40',
    },
    {
      image: '/svg/typescript.svg',
      name: 'TypeScript: 4.9.4',
      width: '40',
      height: '40',
    },
    {
      image: '/svg/react.svg',
      name: 'React: 18.2.0',
      width: '45.71',
      height: '40',
    },

    {
      image: '/svg/react-query.svg',
      name: 'React query: 4.20.4',
      width: '45.71',
      height: '40',
    },
  ],
  description:
    "On the lookout for your next binge-watch? This app taps into the TMDB API to help you explore a huge library of movies, TV shows, and trending personalities. Whether you're after upcoming releases, cult classics or just killing time, you’ll find everything from trailers and posters to cast bios, ratings, reviews and more — all wrapped up in a fast, user-friendly interface. Built with React and TypeScript, the app makes use of dynamic data fetching, smooth scrolling, and responsive layouts. Filtering content is effortless thanks to intuitive controls, and features like YouTube trailer embeds and intersection-based lazy loading make browsing feel seamless.",
  apis: [
    { name: 'TMDB', anchor: 'https://www.themoviedb.org/documentation/api' },
    {
      name: 'Fetch',
      anchor: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    },
    {
      name: 'Intersection observer',
      anchor:
        'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    },
  ],
  third_party: [
    { name: 'YouTube', anchor: 'https://www.youtube.com/' },
    {
      name: 'React icons',
      anchor: 'https://react-icons.github.io/react-icons/',
    },
    {
      name: 'React router',
      anchor: 'https://reactrouter.com/en/main',
    },
    { name: 'React query', anchor: 'https://tanstack.com/query/latest/' },
  ],
  project__anchor: 'https://pux-movies.netlify.app/',
  repo__anchor: 'https://github.com/Dangereye/movies-ts',
};
