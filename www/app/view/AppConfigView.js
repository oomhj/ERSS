Ext.define('HERSS.view.AppConfigView', {
    extend: 'Ext.Panel',
    xtype: 'AppConfigView',
    config: {
        layout: 'fit',
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
        scroll : false,
//        html:'contentcontentcontentcontentcontentcontentcontentcontentcontent',
        html: '<div style="width:100%;height:100%;-webkit-overflow-scrolling:touch;overflow:scroll;"><iframe style="border:0px;" src="http://bing.com/">Your device does not support iframes.</iframe></div>',
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
