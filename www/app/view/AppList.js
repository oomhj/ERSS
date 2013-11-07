Ext.define('HERSS.view.AppList', {
    extend: 'Ext.List',
    xtype: 'AppList',
    requires: ['HERSS.store.AppListStore'],
    config: {
        items: [
            {
                xtype: 'toolbar',
                title: '订阅',
                docked: 'top',
                items: [
                    {
                    xtype:'spacer'    
                },
                    {
                        xtype:'button',
                        text:'我的订阅',
                        name:'mysubscribe'
                    }
                ]
            }
        ],
        title: '订阅',
        iconCls: 'time',
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
}
);