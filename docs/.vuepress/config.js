module.exports = {
    title: 'VuePressBlogNotes', // 设置网站标题
    dest: './dist',  // 设置输出目录，这个目录后续部署到github上的时候会用到
    base: '/VuePressBlogNotes/',// 设置站点根路径
    repo:
        'https://github.com/changhengheng/VuePressBlogNotes.git', // 添加 github 链接
    themeConfig: {
        nav: [
            { text: 'External', link: 'https://github.com/changhengheng/VuePressBlogNotes.git' },
          ],
        sidebar: [  
            ['/getting-started/', '快速入门'],
            ['/getting-started/1.常用配置', '常用配置'],
            ['/getting-started/2.Front-Matter', 'Front-Matter'],
            ['/getting-started/3.调色板', '调色板'],
            ['/getting-started/4.plugin-blog插件快速入门.md', '@vuepress/plugin-blog插件快速入门'],
        ]
    }
}
