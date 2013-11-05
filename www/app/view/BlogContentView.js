Ext.define('HERSS.view.BlogContentView', {
    extend: 'Ext.DataView',
    xtype: 'BlogContentView',
    requires: ['HERSS.store.BlogContentStore'],
    config: {
        cls: 'messageInfo',
        store: {xclass: 'HERSS.store.BlogContentStore'},
        itemTpl: '<p>{content}</p><p>共有{commentCount}条评论</p>',
        items: [{
                docked: 'top',
                xtype: 'toolbar',
                items: [
                    {
                        xtype:'button',
                        text:'返回',
                        name:'back',
                        ui: 'back'
                    }
                ]
            },
            {
                docked: 'bottom',
                xtype: 'toolbar',
                title: '消息'
            }],
        hidden: true,
        showAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slide',
            direction:'left',
            duration: 250
        },
        hideAnimation: Ext.browser.is.ie || Ext.browser.is.AndroidStock2 ? null : {
            type: 'slideOut',
            direction:'right',
            duration: 250
        }
    }

});