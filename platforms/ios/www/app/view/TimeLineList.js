Ext.define('HERSS.view.TimeLineList', {
    extend: 'Ext.List',
    requires: [
        'Ext.plugin.ListPaging',
        'HERSS.utils.FirstPagePullRefresh',
        'HERSS.store.TimeLineListStore'
    ],
    xtype: 'TimeLineList',
    config: {
        title: '消息',
        iconCls: 'home',
        infinite: true,
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        items: {
            docked: 'top',
            xtype: 'toolbar',
            title: '消息'
        },
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: '更多……',
                noMoreRecordsText: '没有更多条记录了'
            },
            {xclass: 'HERSS.utils.FirstPagePullRefresh'}
        ],
        emptyText: '<p class="no-searches">暂无订阅消息</p>',
        itemTpl: [
            '<article>',
            '<header>',
            '<div class="avatar"><img src="{author.avatar}" alt="" width="35" height="35"/></div>',
            '<span class = "FCLev6 nikename"> {author.name} </span>',
            '<span class="pubtime FCLev5">{author.title}</span>',
            '<span class = "origin FCLev5" > <time class="pubtime FCLev5">{post.timestamp}</time>来自{app.desc}</span>',
            '</header >',
            '<section class="content">',
            '<p>{post.title}</p>',
            '<p>{post.summary}</p>',
            '<img src="{post.thumbnail}" width="300">',
            '</section>',
            '</article>'
        ],
        store: {xclass: 'HERSS.store.TimeLineListStore'}
    }
}
);