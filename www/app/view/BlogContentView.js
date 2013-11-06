Ext.define('HERSS.view.BlogContentView', {
    extend: 'Ext.DataView',
    xtype: 'BlogContentView',
    requires: ['HERSS.store.BlogContentStore'],
    config: {
        cls: 'messageInfo',
        store: {xclass: 'HERSS.store.BlogContentStore'},
        itemTpl: '<h1 style="text-align:center">{title}</h1><hr/><p>{content}</p>',
        items: [{
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
//                    ,
//                    {
//                        xtype:'spacer'
//                    },
//                    {
//                        xtype: 'button',
//                        text: '评论',
//                        name: 'comment',
//                        ui: 'round'
//                    }
                ]
            }],
        hidden: true,
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

});