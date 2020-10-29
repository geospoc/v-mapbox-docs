import theme from '@nuxt/content-theme-docs'

export default theme({
  ssr: false,
  target: 'static',
  docs: {
    primaryColor: '#41B883'
  },
  router: {
    base: '/v-mapbox-docs/',
  },
})
