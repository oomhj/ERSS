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
        iconCls: 'message',
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
            '<article style="">',
            '<header>',
            '<tpl if="author.avatar">',
            '<div class="avatar" style="background-image: url(\'{author.avatar}\')"></div>',
            '<tpl else>',
            '<div class="avatar" style="background-image: url(\'default.png\')"></div>',
            '</tpl>',
            '<span class = "FCLev6 nikename"> {author.name} </span>',
            '<span class="pubtime FCLev5">{author.title}</span>',
            '<span class = "origin FCLev5" > <time class="pubtime FCLev5">{post.timestamp}</time>来自{app.desc}</span>',
            '</header>',
            '<section class="content">',
            '<p>{post.title}</p>',
            '<p>{post.summary}</p>',
            '</section>',
            '<tpl if="post.thumbnail">',
            '<section>',
            '<img style="margin-left:0px;height:200px;visibility:visible;" onerror="this.src=\"default.png\"" src="{post.thumbnail}" >',
            '</section>',
            '</tpl>',
            '</article>'
        ],
        store: {xclass: 'HERSS.store.TimeLineListStore'}
    }
}
);