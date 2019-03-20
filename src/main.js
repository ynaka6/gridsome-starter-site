// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/tailwind.css'
import 'prismjs/themes/prism-okaidia.css'
import DefaultLayout from '~/layouts/Default.vue'
import Vuelidate from 'vuelidate'

export default function (Vue, { router, head, isClient }) {
  Vue.use(Vuelidate)
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'ja' }
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Bree+Serif'
  })
  head.script.push({
    type: 'text/javascript',
    src: '//userlike-cdn-widgets.s3-eu-west-1.amazonaws.com/5a66044befa757b2102ef2514520cd2025a9674c2f0522b62ff5e2e2eb29d528.js',
    async: true,
  })
}

