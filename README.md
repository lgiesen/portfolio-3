![Vue 3](https://img.shields.io/badge/Vue-vue@3.5.13-brightgreen?logo=vue.js&logoColor=white&style=flat)
[![Is Website Up?](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)](https://leogiesen.de/#/) 
![GitHub version](https://img.shields.io/github/v/release/lgiesen/portfolio-3?color=green&include_prereleases)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/license/mit) 
<img align="right" height="72px" src="https://raw.githubusercontent.com/lgiesen/portfolio-v2/c907478f950776fef6cbfbfb9dabe628beded429/src/assets/logo/light/logo.svg"/>

# Portfolio - Leo Giesen

This project is deployed at [leogiesen.de](https://leogiesen.de/).
The original version of my portfolio can be inspected [here](https://github.com/lgiesen/portfolio-v1), which I created with HTMl5 CSS3 and JavaScript when I was 18.

## Project Setup

1. [VS Code](https://code.visualstudio.com "VS Code") is the recommended code editor
2. [Node.js](https://nodejs.org/en/download/ "Node")
3. [Vue.js](https://v3.vuejs.org/guide/installation.html#cli): `npm install -g @vue/cli #Install Command Line Interface`

Check your versions:

```
   node --version              # v16.14.2
   npm --version               # 8.5.0
   vue --version               # @vue/cli 5.0.8
```

### Serve/Start Front-end - Compiles and hot-reloads for development

```
npm run serve
#or start via User Interface with: vue ui
```

### Build for Production

```
npm run build #Compiles and minifies for production
```

To publish the changes, the "dist" directory contents are to be copied and pushed to the [portfolio-dist](https://github.com/lgiesen/portfolio-dist) repository because the hosting is based on it. This must be performed because the hosting plan is unable to build from production by itself.