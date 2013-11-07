Ext.define('HERSS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'HERSS.view.TimeLineList',
        'HERSS.view.ShoppingList',
        'HERSS.view.AppList'
    ],
    config: {
        tabBarPosition: 'bottom',
        tabBar: {
        },
        items: [
            {xclass: 'HERSS.view.TimeLineList'},
            {xclass: 'HERSS.view.ShoppingList'},
            {xclass: 'HERSS.view.AppList'}
        ]
    }
});