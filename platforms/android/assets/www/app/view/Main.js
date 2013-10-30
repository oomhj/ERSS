Ext.define('HERSS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'HERSS.view.TimeLineList.TimeLineNavigator',
        'HERSS.view.TimeLineList.ShoppingNavigator'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
        },
        items: [
            {xclass: 'HERSS.view.TimeLineList.TimeLineNavigator'},
            {xclass: 'HERSS.view.TimeLineList.ShoppingNavigator'}
//            {xclass: 'HERSS.view.AppList'}
        ]
    }
});