Ext.define('HERSS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'HERSS.view.TimeLineList.TimeLineNavigator',
        'HERSS.view.TimeLineList.ShoppingNavigator',
        'HERSS.view.AppList'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
        },
        items: [
            {xclass: 'HERSS.view.TimeLineList.TimeLineList'},
            {xclass: 'HERSS.view.TimeLineList.ShoppingList'},
            {xclass: 'HERSS.view.AppList'}
        ]
    }
});