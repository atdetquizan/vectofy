import svgtofont from 'svgtofont';
import path from 'node:path';

const rootPath = './';

svgtofont({
  classNamePrefix: 'vectofy',
  src: path.resolve(process.cwd(), "src/icons"), // svg path
  styleTemplates: path.resolve(rootPath, "src/styles"), // file templates path (optional)
  dist: path.resolve(process.cwd(), "public"), // output path
  fontName: "vectofy", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  // website = null, no demo html files
  website: {
    title: "Base Vectofy",
    // Must be a .svg format image.
    // logo: path.resolve(process.cwd(), "svg", "git.svg"),
    version: '1.0.0',
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "vectofy,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: ``,
    // Add a Github corner to your website
    // Like: https://github.com/uiwjs/react-github-corners
    corners: {
      url: 'https://github.com/atdetquizan/vectofy',
      width: 62, // default: 60
      height: 62, // default: 60
      bgColor: '#dc3545' // default: '#151513'
    },
    links: [
      {
        title: "GitHub",
        url: "https://github.com/atdetquizan/vectofy"
      },
      {
        title: "Feedback",
        url: "https://github.com/atdetquizan/vectofy/issues"
      },
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/atdetquizan/"
      },
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/atdetquizan/vectofy">open-sourced</a>`
  }
}).then(() => {
  console.log('done!');
});