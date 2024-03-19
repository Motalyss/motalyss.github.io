import { defineValaxyConfig } from 'valaxy'
import type { UserThemeConfig } from 'valaxy-theme-yun'
import { addonWaline } from 'valaxy-addon-waline'
// import { addonComponents } from 'valaxy-addon-components'

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
      {
        name: '喜欢的音乐',
        url: '/music/',
        icon: 'i-ri-music-2-line',
        color: '#14f773',
      },
      {
        name: '你问我答',
        url: '/Q&A/',
        icon: 'i-ri-questionnaire-line',
        color: '#f0983a',
      },
    ],

    footer: {
      since: 2024,
      icon: {
        enable: true,
        name: 'i-ri-heart-line',
        animated: true,
        color: '#d69b54',
        url: 'https://motalyss.github.io/',	//图标链接
        title: '回到首页'		//鼠标悬停注释
      },
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
      serverURL: 'https://www.motalyss.store/',
      pageview: true,
      dark: 'auto',
      requiredMeta: ['nick'],
      locale: {
        placeholder: '若要登录，请使用QQ、微博等第三方登录方式；若不便登陆，填写邮箱可收到回复邮件~'
      }
    }),
  ],

  unocss: { safelist },
})
