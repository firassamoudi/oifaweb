module.exports = {
  apps: [
    {
      name: "oifa",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        API_URL: "https://beta.oifa.tech",
        PORT: 3000,
      },
    },
  ],
};
