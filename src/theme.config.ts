export const THEME_CONFIG: App.Locals['config'] = {
  /** blog title */
  title: "太陽系第三行星上の賽博不夜城",
  /** your name */
  author: "胸毛齐腰",
  /** website description */
  desc: "Just enjoy the show",
  /** your deployed domain */
  website: "https://xsmk-typo.vercel.app/",
  /** your locale */
  locale: "zh-tw",
  /** theme style */
  themeStyle: "light",
  /** your socials */
  socials: [
    {
      name: "github",
      href: "https://twitter.com/dearmaxi",
    },
    {
      name: "rss",
      href: "/atom.xml",
    },
    {
      name: "twitter",
      href: "https://twitter.com/dearmaxi",
    },
    // {
    //   name: "mastodon",
    //   href: "https://github.com/moeyua/astro-theme-typography",
    // }
  ],
  /** your header info */
  header: {
    twitter: "@dearmaxi",
  },
  /** your navigation links */
  navs: [
    {
      name: "過往",
      href: "/posts/page/1",
    },
    // {
    //   name: "Archive",
    //   href: "/archive",
    // },
    // {
    //   name: "Categories",
    //   href: "/categories"
    // },
    // {
    //   name: "是誰",
    //   href: "/about",
    // },
  ],
  /** your category name mapping, which the `path` will be shown in the url */
  category_map: [
    { name: "胡适", path: "hu-shi" },
  ],
  /** your comment provider */
  comments: {
    // disqus: {
    //   shortname: "typography-astro",
    // },
    // giscus: {
    //   repo: 'moeyua/astro-theme-typography',
    //   repoId: 'R_kgDOKy9HOQ',
    //   category: 'General',
    //   categoryId: 'DIC_kwDOKy9HOc4CegmW',
    //   mapping: 'title',
    //   strict: '0',
    //   reactionsEnabled: '1',
    //   emitMetadata: '1',
    //   inputPosition: 'top',
    //   theme: 'light',
    //   lang: 'zh-CN',
    //   loading: 'lazy',
    // },
    // twikoo: {
    //   envId: "https://twikoo-tau-flame.vercel.app",
    // }
  }
}

