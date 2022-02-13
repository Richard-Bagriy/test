import * as path from "path";

const {resolve} = require("path");
// const PluginSwapFiles = require("./PluginSwapFiles/");
const swapFiles = require("./PluginSwapFiles/swapFIles");
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'folder',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'tachyons/css/tachyons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  srcDir: resolve("./src/default"),

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  watch: [
    "~/src/default2/*.vue"
  ],

  hooks: {
    build:{
      before() {
        swapFiles(path.resolve(__dirname, "src", "default"), path.resolve(__dirname, "src", "default"))
      },
      done() {
        swapFiles(path.resolve(__dirname, "src", "default"), path.resolve(__dirname, "src", "default"))
      }
    }
  },

    // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      // const pathToSrcFolder = resolve(__dirname, "src", "default").length
      // const findFolder = join(__dirname, "src", "default2");
      //
      // if (config.name === "client") {
      //   config.module.rules = [
      //     {
      //       test: /\.css$/i,
      //       loader: 'file-replace-loader',
      //       exclude: [/node_modules/, /.nuxt/],
      //       options: {
      //         condition: 'always',
      //          replacement(resourcePath) {
      //           const fileName = resourcePath.slice(pathToSrcFolder);
      //           const pathToFile = join(findFolder, fileName);
      //
      //           if (existsSync(pathToFile)) {
      //             // return pathToFile;
      //           }
      //
      //           return resourcePath;
      //         },
      //         async: true
      //       }
      //     },
      //     ...config.module.rules,
      //   ]
      // }
    },
    watchers: {
      webpack: {
        aggregateTimeout: 3000,
        poll: 5000
      }
    },
    plugins: [
      // new PluginSwapFiles({
      //   from: path.resolve(__dirname, "src", "default"),
      //   to: path.resolve(__dirname, "src", "default2")
      // })
    ]
  },
}
