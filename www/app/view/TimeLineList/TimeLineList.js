Ext.define('HERSS.view.TimeLineList.TimeLineList', {
    extend: 'Ext.List',
    requires: [
        'Ext.plugin.ListPaging',
        'Ext.plugin.PullRefresh',
        'HERSS.store.TimeLineListStore'
    ],
    xtype: 'TimeLineList',
    config: {
        title: '消息',
        iconCls: 'time',
        cls: 'black',
        infinite: true,
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: '更多……',
                noMoreRecordsText: '没有更多条记录了'
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: '下拉可以更新',
                releaseText: '松开开始更新',
                loadingText: '正在刷新……',
                loadedText: '刷新成功',
                lastUpdatedText: '最近更新时间',
                onLatestFetched: function(operation) {
                    var store = this.getList().getStore(),
                            newRecords = operation.getRecords();
                    store.removeAll(true);
                    store.insert(0, newRecords);
                    this.setState("loaded");
                    this.fireEvent('latestfetched', this);
                    if (this.getAutoSnapBack()) {
                        this.snapBack();
                    }
                }
            }
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