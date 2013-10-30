Ext.define('HERSS.view.TimeLineList.TimeLineNavigator', {
    extend: 'Ext.NavigationView',
    xtype: 'TimeLineNavigator',
    requires: [
        'HERSS.view.TimeLineList.TimeLineList'
    ],
    config: {
        tab: {
            title: '消息',
            iconCls: 'home'
        },
        autoDestroy: false,
        items: [
            {xtype:'TimeLineList'}
        ]
    }
});
