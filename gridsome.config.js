// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || []
  }
}


module.exports = {
  siteName: 'Gridsome Starter',
  siteUrl: 'https://gridsome-starter-site.netlify.com',
  siteDescription: 'Gridsome入門として構築したデモサイトです。mdファイルを利用したブログ投稿やTailwind CSSを利用したUI構築を行なっています。',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        config: './src/tailwind.js'
      }
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: [
            './src/**/*.vue',
            './src/**/*.js',
            './src/**/*.jsx',
            './src/**/*.md',
            'node_modules/prismjs/**/*.js'
        ],
        extractor: TailwindExtractor,
        extensions: ['vue', 'js', 'jsx', 'md']
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/blog/:slug',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          },
          '/term': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
      ]
    }
  }
}