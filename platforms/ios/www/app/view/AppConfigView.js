Ext.define('HERSS.view.AppConfigView', {
    extend: 'Ext.Panel',
    xtype: 'AppConfigView',
    config: {
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
                ]
            }
        ],
        hidden: true,
        scroll: false,
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
