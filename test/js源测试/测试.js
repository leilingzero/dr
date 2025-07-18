var rule = {
    title: '剧集TV',
    host: 'https://v.ijujitv.cc',
    url: '/show/fyclass--------fypage---.html',
    searchUrl: 'search/**----------fypage---.html',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    class_parse: '.nav-bar-menu li;a&&Text;a&&href;.*/(.*?).html',
    cate_exclude: '娱乐新闻|排行榜',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, js: ''};
    }),
    limit: 6,
    推荐: '.mod-main .m-list-inner li;*;*;*;*;*',
    一级: '.m-list-inner li;a&&title;img&&data-original;.thumb&&Text;a&&href;p&&Text',
    二级: {
        title: 'h1&&Text;.intro&&p:eq(0)&&Text',
        img: '.quic&&data-original',
        desc: '.intro&&p:eq(6)&&Text;.intro&&p:eq(2)&&Text;.intro&&p:eq(3)&&Text;.intro&&p:eq(5)&&Text;.intro&&p:eq(4)&&Text',
        content: '.item-desc-info&&Text',
        tabs: '.nav&&a',
        tab_exclude: 'APP秒播',
        lists: `.juji-list:eq(#id) li:not(:contains(网盘下载))`,
        list_url: 'a&&href',
    },
    搜索: '.m-list-inner li;a&&title;img&&data-original;.thumb&&Text;a&&href;p&&Text',
}