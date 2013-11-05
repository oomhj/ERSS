Ext.define('HERSS.view.AppList', {
    extend: 'Ext.List',
    xtype: 'AppList',
    requires:['HERSS.store.AppListStore'],
    config: {
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: '我的订阅'
            }
        ],
        title: '订阅',
        iconCls: 'time',
        infinite: true,
        grouped:true,
        autoDestroy: false,
        variableHeights: true,
        disableSelection: true,
        scrollToTopOnRefresh: false,
        emptyText: '<p class="no-searches">暂无订阅应用</p>',
        itemTpl: '<span>{name}</span>',
        store: {xclass:'HERSS.store.AppListStore'}
    }
}
);