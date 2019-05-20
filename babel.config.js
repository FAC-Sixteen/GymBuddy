module.exports = function (api) {
    api.cache(true);
  
    // const presets = [ ... ];
    const plugins = ["@babel/plugin-transform-async-to-generator"];
  
    return {
    //   presets,
      plugins
    };
  }
