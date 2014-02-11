Ext.define('HERSS.view.AppList', {
    extend: 'Ext.List',
    xtype: 'AppList',
    requires: [
        'HERSS.store.AppListStore',
        'HERSS.utils.FirstPagePullRefresh',
        'Ext.plugin.ListPaging'
    ],
    config: {
        items: [
            {
                xtype: 'toolbar',
                title: '订阅',
                docked: 'top',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        text: '我的订阅',
                        name: 'mysubscribe'
                    }
                ]
            }
        ],
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                loadMoreText: '更多……',
                noMoreRecordsText: '没有更多条记录了'
            },
            {xclass: 'HERSS.utils.FirstPagePullRefresh'}
        ],
        title: '订阅',
        iconCls: 'rss',
        infinite: true,
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        emptyText: '<p class="no-searches">暂无可订阅应用</p>',
        itemTpl: [
            '<div class="appItem">b</div>',
            '<span class = "FCLev6 nikename"> {desc} </span>',
            '<span class="origin FCLev5">提供者：{vendor}</span>'
        ],
        store: {xclass: 'HERSS.store.AppListStore'}
    }
}
);