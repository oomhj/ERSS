Ext.define('HERSS.view.SubscribeList', {
    extend: 'Ext.List',
    xtype: 'SubscribeList',
    requires: ['HERSS.store.SubscribeListStore'],
    config: {
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: '我的订阅'
            },
            {
                docked: 'bottom',
                ui: 'dark',
                xtype: 'toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: '返回',
                        name: 'back',
                        ui: 'round'
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
        emptyText: '<p class="no-searches">暂无订阅应用</p>',
        itemTpl: '<span>{name}</span>',
        store: {xclass: 'HERSS.store.SubscribeListStore'},
        showAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slide',
            direction: 'left',
            duration: 250
        },
        hideAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slideOut',
            direction: 'right',
            duration: 250
        }
    }
}
);