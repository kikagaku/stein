const base_url = 'https://szxwsv2jlweeye7fhn4vfiisyr0yeokf.dllab.ai'

export default {
  mode: 'universal',
  env: {
    base_url: base_url
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Deep Learning Digital Conference | Deep Learning Lab',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { name: 'robots', content: 'noindex' },
      { name: 'googlebot', content: 'noindex' },
      { name: 'keywords', content: '機械学習,ディープラーニング,人工知能,セミナー,コミュニティ' },
      { name: 'description', content: '深層学習の実用化に向けて研究・事例・テクノロジーの全てを知るカンファレンス' },
      { property: 'og:title', content: 'Deep Learning Digital Conference | New Normal で求められる AI の役割とは' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${base_url}` },
      { property: 'og:description', content: '深層学習の実用化に向けて研究・事例・テクノロジーの全てを知るカンファレンス'},
      { property: 'og:image', content: `${base_url}/ogp.png` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: '深層学習の実用化に向けて研究・事例・テクノロジーの全てを知るカンファレンス' },
      { name: 'twitter:title', content: 'New Normal で求められる AI の役割とは | New Normal で求められる AI の役割とは' },
      { name: 'twitter:site', content: '@deep_larning_lab_inc' },
      { name: 'twitter:creator', content: '@deep_larning_lab_inc' },
      { name: 'twitter:image', content: `${base_url}/ogp.png }` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' }

    ],
    script: [
      { src: '//code.jquery.com/jquery-2.2.4.min.js', integrity: 'sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=', crossorigin: 'anonymous' },
      { src: `${base_url}/js/modaal.min.js` },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.css',
    '~/assets/css/modaal.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  // ビルド後のフォルダ名
  generate: {
    dir: 'docs'
  }
}
