module.exports = {
  presets: [
    [
      "@babel/env",
      process.env.BUILD_TARGET === "module" ? { modules: false } : {}
    ],
    "@babel/typescript"
  ]
};
