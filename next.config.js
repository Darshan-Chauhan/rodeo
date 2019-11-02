const withCSS = require("@zeit/next-css");

const env = process.env.ENV || "development";

const envConfig = {
  development: {
    ROOT_URL: "http://www.omdbapi.com",
    API_KEY: 'f62129d6'
  },
  staging: {
    ROOT_URL: "http://www.omdbapi.com",
    API_KEY: 'f62129d6'
  },
  production: {
    ROOT_URL: "http://www.omdbapi.com",
    API_KEY: 'f62129d6'
  }
}[env];

module.exports = withCSS({
  devIndicators: {
    autoPrerender: false,
  },
  env: { ...envConfig }
});
