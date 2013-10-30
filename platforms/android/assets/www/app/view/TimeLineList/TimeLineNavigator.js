Ext.define('HERSS.view.TimeLineList.TimeLineNavigator', {
    extend: 'Ext.NavigationView',
    xtype: 'TimeLineNavigator',
    requires:[
        'HERSS.view.TimeLineList.TimeLineList'
    ],
    config: {
        tab: {
            title: '订阅',
            iconCls: 'home'
        } ,
        autoDestroy: false,
        items: [
            {
                xclass: 'HERSS.view.TimeLineList.TimeLineList'
            }
        ]
    }
});
