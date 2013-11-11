Ext.define('HERSS.view.ShoppingList', {
    extend: 'Ext.List',
    requires: [
        'HERSS.utils.FirstPagePullRefresh',
        'Ext.plugin.ListPaging',
        'HERSS.store.ShoppingListStore'
    ],
    xtype: 'ShoppingList',
    config: {
        title: '购物推荐',
        iconCls: 'cart',
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
            {xclass: 'HERSS.utils.FirstPagePullRefresh'}
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