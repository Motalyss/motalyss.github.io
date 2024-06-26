import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'motalyss.github.io',
  lang: 'zh-CN',
  title: 'Motalyss\'s blog | Motalyss的博客',
  subtitle: 'What you see is what you want.',
  author: {
    name: 'Motalyss',
    avatar: '/howl.jpg',
    status:
    {
      emoji: '✒️',
      message: 'Writing...'
    }
  },
  mode: 'auto',
  lastUpdated: true,
  favicon: '/FluentEmojiHighContrastFountainPen.svg',
  description: '我就是我，是颜色不一样的烟火。',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/Motalyss',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '微博',
      link: 'https://weibo.com/u/6459886020',
      icon: 'i-ri-weibo-line',
      color: '#E6162D',
    },
    {
      name: '豆瓣',
      link: 'https://www.douban.com/people/205757224/',
      icon: 'i-ri-douban-line',
      color: '#007722',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/seasons-romance',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/176548998',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
  ],

  search: {
    enable: true,
    type: 'fuse',
  },

  fuse: {
    options: {
      keys: ['title', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      threshold: 0.1,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    },
  },

  comment: {
    enable: true,
  },

  mediumZoom: {
    enable: true,
  },

  statistics: {
    enable: true,
    readTime: {
    /**
     * 阅读速度
     */
    speed: {
        cn: 300,
        en: 200,
    },
    },
  },

  sponsor: {
    enable: true,
    title: '我很可爱，请给我钱！',
    description: "谢谢老板！(≧▽≦)",
    /*methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],*/
  },
})
