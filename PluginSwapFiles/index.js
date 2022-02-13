const swapFiles = require("./swapFIles");

class PluginSwapFiles {

  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    if (compiler.options.name === "client") {
      // compiler.hooks.beforeCompile.tap(PluginSwapFiles.name, () => {
      //   swapFiles(this.options.from, this.options.to);
      // })
      // compiler.hooks.done.tap(PluginSwapFiles.name, () => {
      //   swapFiles(this.options.from, this.options.to);
      // })
    }


    // console.log("Count is :", count);
    // if (compiler.options.name === "client") {
    //   compiler.hooks.watchRun.tap(PluginSwapFiles.name, () => {
    //     swapFiles(this.options.from, this.options.to);
    //     // console.log('what?1', compiler.options.name);
    //   })
    //   compiler.hooks.done.tap(PluginSwapFiles.name, () => {
    //     swapFiles(this.options.from, this.options.to);
    //     console.log('what?2', compiler.options.name);
    //   })
    // }
  }
}

module.exports = PluginSwapFiles;
