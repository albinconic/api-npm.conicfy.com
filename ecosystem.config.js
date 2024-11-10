module.exports = {
    apps : [{
      name: "conicfy",
      script: "./src/server.js",
      instances: 1,
      env: {
        PORT: 3000,
        NODE_ENV: "development",
      },
      env_production: {
        PORT: 4041,
        NODE_ENV: "production",
      }
    }]
  }