export const theWeather = {
  image: 'the-weather-project',
  date: 'Mar 2021',
  name: 'The Weather',
  tech: [
    { image: '/svg/html5.svg', name: 'HTML5', width: '34.29', height: '40' },
    { image: '/svg/css3.svg', name: 'CSS3', width: '34.29', height: '40' },
    { image: '/svg/sass.svg', name: 'SCSS', width: '53.38', height: '40' },
    {
      image: '/svg/js.svg',
      name: 'JavaScript ES6+',
      width: '40',
      height: '40',
    },
    {
      image: '/svg/react.svg',
      name: 'React: 17.0.1',
      width: '45.71',
      height: '40',
    },
  ],
  description:
    "Don't get caught off guard by the weather! Check the forecast for your current location easily using Geolocation. Or, if you prefer, you can manually search for weather updates anywhere else. Forecasts are updated hourly and include details on conditions, precipitation, and wind, all presented in a format that suits you. Additionally, enjoy dynamic background imagery provided by Unsplash, which matches current weather conditions - somewhat reliably.",
  apis: [
    { name: 'Weather', anchor: 'https://www.weatherapi.com/' },
    { name: 'Unsplash', anchor: 'https://unsplash.com/developers' },
    {
      name: 'Fetch',
      anchor: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API',
    },
    {
      name: 'Geolocation',
      anchor:
        'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    },
  ],
  third_party: [
    {
      name: 'React icons',
      anchor: 'https://react-icons.github.io/react-icons/',
    },
    {
      name: 'React router',
      anchor: 'https://v5.reactrouter.com/web/guides/quick-start',
    },
  ],
  project__anchor: 'https://pux-the-weather.netlify.app/',
  repo__anchor: 'https://github.com/Dangereye/the-weather',
};
