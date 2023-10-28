import { defineConfig } from 'astro/config';
import compress from "astro-compress"; //css,js,htmlなどを圧縮
import relativeLinks from "astro-relative-links";//相対パスに対応

// https://astro.build/config
export default defineConfig({
  base: "",
  integrations: [
    //css,html,jsの圧縮を無効
    compress({
      CSS       : false,
      HTML      : false,
      JavaScript: false,
    }),
    relativeLinks(),
  ],
  outDir: './dist',
  build: {
    format: 'file'
  },
  server: {
    open: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.')[1];
            if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
              extType = 'fonts';
            }
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              extType = 'images';
            }
            if (extType === 'css') {
              return `assets/css/style.css`;
            }
            if (extType === 'js') {
              return `assets/js/[name].[extname]`;
            }
            return `assets/[name].[extname]`;
          },
          // entryFileNames: "scripts/[name].js"
          entryFileNames: 'assets/js/[name].js',
        },
      },
      //CSSのminify化
      minify: false,
    },
    optimizeDeps: {
      exclude: ['swiper']
    }
  },

});

