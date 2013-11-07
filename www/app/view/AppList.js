Ext.define('HERSS.view.AppList', {
    extend: 'Ext.Container',
    xtype: 'AppList',
    requires: ['HERSS.store.AppListStore'],
    config: {
        title: '订阅',
        iconCls: 'time',
        layout: 'vbox',
        items: [
            {
                xtype: 'component',
                html: '我的订阅',
                height: '20px'
            },
            {
                xtype: 'component',
                cls: 'dark',
                html: '订阅列表'
            },
            {
                flex: 2,
                xtype: 'list',
                infinite: true,
                grouped: true,
                autoDestroy: false,
                variableHeights: true,
                disableSelection: true,
                scrollToTopOnRefresh: false,
                emptyText: '<p class="no-searches">暂无可订阅应用</p>',
                itemTpl: '<span>{name}</span>',
                store: {xclass: 'HERSS.store.AppListStore'}
            }
        ]

    }
});
