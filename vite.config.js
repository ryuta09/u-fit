export default {
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env': JSON.stringify(process.env),
  },
  build: {
    rollupOptions: {
      external: ['swiper'],
      output: {
        globals: {
          swiper: 'Swiper',
        },
      },
    },
  },
};