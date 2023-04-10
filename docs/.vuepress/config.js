
  module.exports = {
    title: 'KUANG的博客',
    description: 'YYY',
    base: '/blogs/',
    theme: 'reco',
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
        { text: "开始学习", link: "/blogs/1" },
        {
          text: "KUANG 的博客",
          items: [
            { text: "掘金", link: "https://juejin.cn/user/3778365548147229" },
            { text: "Github", link: "https://github.com/myisacc" }
          ]
        }
      ],
      // sidebar: [
      //   {
      //     title: "欢迎学习",
      //     path: "/",
      //     collapsable: false,  // 是否折叠
      //     children: [{ title: "博客简介", path: "/" }],
      //   },
      //   {
      //     title: "基础篇",
      //     path: "/blogs/1",
      //     collapsable: false,
      //     children: [
      //       { title: "防抖节流篇", path: "/blogs/1" },
      //       { title: "系统热键", path: "/blogs/2" },
      //       { title: "手写面试题", path: "/blogs/3"},
      //       { title: "html 和 css 相关面试题", path: "/blogs/4"},
      //       { title: "React和Vue深度对吧", path:"/blogs/5"}
      //     ]
      //   } 
      // ],
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
        ["sakura", {
          num: 20,  // 默认数量
          show: true, //  是否显示
          zIndex: -1,   // 层级
          img: {
            replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
            httpUrl: '...'     // 绝对路径
          }     
      }]
     ]
    }
  }


