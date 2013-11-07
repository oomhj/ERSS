Ext.define('HERSS.view.ShoppingList', {
    extend: 'Ext.List',
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
        'HERSS.store.ShoppingListStore'
    ],
    xtype: 'ShoppingList',
    config: {
        title: '购物推荐',
        iconCls: 'favorites',
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        items: {
            docked: 'top',
            xtype: 'toolbar',
            title: '购物推荐'
        },
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
        itemTpl: [
            '<article>',
            '<header>',
            '<a class="avatar" href="/u/{author.uid}"><img src="{author.avatar}" alt="" width="35" height="35" class="J-lazyPic"/></a>',
            '<span class = "FCLev6 nikename"> {author.name} </span>',
            '<span class="pubtime FCLev5">{author.title}</span>',
            '<span class = "origin FCLev5" > <time class="pubtime FCLev5">{post.timestamp}</time>来自{app.desc}</span>',
            '</header >',
            '<section >',
            '<img class="" style="margin-left:0px;max-width:290px;visibility:visible;" src="{post.thumbnail}">',
            '<div class="title">{post.title}</div>',
            '</div>',
            '</section>',
            '</article>'
        ],
        store: {
            xclass: 'HERSS.store.ShoppingListStore'
        }
    }
}
);