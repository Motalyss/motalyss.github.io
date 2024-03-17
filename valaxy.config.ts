import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '一直写下去吧',
      cloud: {
        enable: true,
      },
    },
    colors: {
      primary: '#38F2F2'
    },
    fireworks: {
      enable: true,
      colors: ['#FA625F', '#FA5FAA', '#F786CC']
    },

    pages: [
      {
        name: '我的小伙伴们（待更新）',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子（待更新）',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2024,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },
  // 设置 valaxy-addon-waline 配置项
  addons: [
    addonWaline({
      // Waline 配置项，参考 https://waline.js.org/reference/client/props.html
      serverURL: 'https://waline-test-kv3iqptpf-motalyss-projects.vercel.app',
      pageview: true,
      dark: 'auto',
      requiredMeta: ['nick'],
      locale: {
        placeholder: '填写邮箱，可以收到回复通知~'
      }
    }),
  ],

  unocss: { safelist },
})
