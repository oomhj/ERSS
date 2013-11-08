Ext.define('HERSS.controller.AppController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.SubscribeList', 'HERSS.view.AppConfigView'],
        refs: {
            appList: 'Main > AppList',
            subscribeList: 'SubscribeList',
            appConfigView: 'AppConfigView',
            mySubscribeButton: 'Main AppList  button[name="mysubscribe"]'
        },
        control: {
            mySubscribeButton: {
                tap: 'showMySubscribe'
            },
            appList: {
                itemtap: 'showAppConfigView'
            }
        }
    },
    //event
    showMySubscribe: function(obj, e, eOpts) {
        if (!this.getSubscribeList()) {
            Ext.Viewport.add(Ext.create('HERSS.view.SubscribeList'));
            console.log('create-SubscribeList');
        }
        this.getSubscribeList().show();
        this.getSubscribeList().getStore().load();
    },
    showAppConfigView: function(list, idx, el, record) {
        if (!this.getAppConfigView()) {
            Ext.Viewport.add(Ext.create('HERSS.view.AppConfigView'));
            console.log('create-AppConfigView');
        }
        this.getAppConfigView().show();
    }
});
