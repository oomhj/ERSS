Ext.define('HERSS.view.TimeLineList.ShoppingList', {
        extend: 'Ext.dataview.DataView',
        requires: [
            'Ext.plugin.PullRefresh',
            'Ext.plugin.ListPaging'
        ],
        xtype: 'ShoppingList',
        config: {
            title: '购物推荐',
            iconCls: 'time',
            autoDestroy: false,
            variableHeights: true,
            plugins: [
                { type: 'listpaging' },
                { type: 'pullrefresh' }
            ],
            itemTpl: [
                '<article class="wrapper-wb BgCLev5 BCLev5 J-feed">',
                '<header class = "tit-wb clearfix BCLev6">',
                '<a class="avatar-wb" href="/u/{author.uid}"><img src="{author.avatar}" alt="" width="35" height="35" class="J-lazyPic"/></a>',
                '<span class = "FCLev6 nikename-wb"> {author.name} </span>',
                '<span class="time-wb FCLev5">{author.title}</span>',
                '<span class = "origin-wb FCLev5" > <time class="time-wb FCLev5">{meta.time}</time>来自{app.name}</span>',
                '</header >',
                '<section class="content-wb">',
                '<p>{meta.title}</p>',
                '<p>{meta.summary}</p>',
                '<img src="{meta.thumb}">',
                '</section>',
//评论，转发等
//                '<footer class= "action-wb L-tab BgCLev7 BCLev14" >',
//                '<a href="javascript:;" class="J-rt rt-action-wb L-item-tab FCLev9"><p class="BCLev8"><i>&nbsp;</i>转发<span data-num="0"></span></p></a>',
//                '<a href="javascript:;" class= "J-cmt cmt-action-wb L-item-tab FCLev9"><p class="BCLev8"><i>&nbsp;</i>评论<span data-num="0">15</span></p></a>',
//                '<a href="javascript:;" class= "J-like like-action-wb L-item-tab FCLev9 J-feed-act-like" ><p class="BCLev8"><i>&nbsp;</i>赞<span data-num="0"></span></p></a>',
//                '</footer >',
                '</article>'
            ].join(""),
            store: {
                xclass: 'HERSS.store.TimeLineListStore'
            }
        }
    }
)