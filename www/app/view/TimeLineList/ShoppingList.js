Ext.define('HERSS.view.TimeLineList.ShoppingList', {
    extend: 'Ext.List',
    requires: [
        'Ext.plugin.PullRefresh',
        'Ext.plugin.ListPaging',
        'HERSS.store.ShoppingListStore'
    ],
    xtype: 'ShoppingList',
    config: {
        title: '购物推荐',
        iconCls: 'time',
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        plugins: [
            {type: 'listpaging'},
            {type: 'pullrefresh'}
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
            '<img class="" style="margin-left:0px;width:290px;visibility:visible;" src="{post.thumbnail}">',
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