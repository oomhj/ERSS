Ext.define('HERSS.view.TimeLineList.ShoppingNavigator', {
    extend: 'Ext.NavigationView',
    xtype: 'ShoppingNavigator',
    requires: [
        'HERSS.view.TimeLineList.ShoppingList'
    ],
    config: {
        tab: {
            title: '购物推荐',
            iconCls: 'favorites'
        },
        autoDestroy: false,
        items: [
            {xtype:'ShoppingList'}
        ]
    }
});
