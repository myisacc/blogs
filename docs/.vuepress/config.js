
  module.exports = {
    title: 'KUANG的博客',
    description: 'YYY',
    base: '/blogs/',
    theme: 'reco',
    head: [
      [
          'link', // 设置 favicon.ico，注意图片放在 public 文件夹下
          { rel: 'icon', href: 'avatar.jpg' }
      ]
  ],
    themeConfig: {
      subsidebar: "auto",
      logo: "/avatar.jpg",
      authorAvatar: "/avatar.jpg",
      type: "blog",
      locales: {
        "/": {
          lang: "zh-CN",
        },
      },
      nav: [
        { text: "首页", link: "/" },
        { text: "作者简介", link: "/blogs/z"},
        { text: "开始学习", link: "/s/1" },
        { text: "页面2", link: "/v" },
        {
          text: "KUANG 的博客",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/3778365548147229" },
            { text: "Github", link: "https://github.com/myisacc" }
          ]
        }
      ],
      sidebar: [
        {
          title: "欢迎学习",
          path: "/s/1",
          collapsable: false,  // 是否折叠
          children: [{ title: "博客简介", path: "/s/j" }],
        },
        {
          title: "基础篇",
          path: "/s/1",
          collapsable: true,
          children: [
            { title: "防抖节流篇", path: "/s/1" },
            { title: "系统热键", path: "/s/2" },
            { title: "手写面试题", path: "/s/3"},
            { title: "html 和 css 相关面试题", path: "/s/4"},
            { title: "React和Vue深度对吧", path:"/s/5"}
          ]
        } 
      ],
      blogConfig: {
        category: {
          location: 9, // 在导航栏菜单中所占的位置，默认2
          text: "博客", // 默认文案 “分类”
        },
        tag: {
          location: 4, // 在导航栏菜单中所占的位置，默认4
          text: "Tag", // 默认文案 “标签”
        },
      },
      plugins: [
        [
          '@vuepress-reco/vuepress-plugin-bgm-player',
          {
            audios: [
              {
                name: 'LOSER',
                artist: '米津玄師',
                url: 'https://www.ytmp3.cn/down/73654.mp3',
                cover: 'https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200'
              }
            ] ,
            // 是否默认缩小
            autoShrink: true ,
            // 缩小时缩为哪种模式
            shrinkMode: 'float',
            // 悬浮窗样式
            floatStyle:{ bottom: '10px', 'z-index': '999999' }
          }
        ],
        [
          '@vuepress-reco/vuepress-plugin-kan-ban-niang',
          {
            theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
          }
        ]
      ]
    }
  }


