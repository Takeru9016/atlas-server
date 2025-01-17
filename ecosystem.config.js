module.exports = {
  apps: [
    {
      name: "atlas-server",
      script: "pnpm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
