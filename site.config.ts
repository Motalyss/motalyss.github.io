import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'motalyss.github.io',
  lang: 'zh-CN',
  title: 'Motalyss\'s blog',
  subtitle: '始めようか？',
  author: {
    name: 'Motalyss',
    avatar: '/howl014.jpg',
    status:
    {
      emoji: '✒️',
      message: 'Writing...'
    }
  },
  mode: 'auto',
  lastUpdated: true,
  favicon: '',
  description: 'What you see is what you want.',
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
    {
      name: 'E-Mail: 1198246098@qq.com',
      link: '1198246098@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
  ],

  search: {
    enable: true,
    type: 'engine',
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
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
    ],
  },
})
