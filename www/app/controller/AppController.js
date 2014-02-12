Ext.define('HERSS.controller.AppController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.SubscribeList', 'HERSS.view.AppConfigView'],
        refs: {
            appList: 'Main > AppList',
            subscribeList: 'SubscribeList',
            appConfigView: 'AppConfigView',
            mySubscribeButton: 'Main AppList  button[name="mysubscribe"]',
            logoutButton: 'SubscribeList button[name="logout"]'
        },
        control: {
            mySubscribeButton: {
                tap: 'showMySubscribe'
            },
            appList: {
                itemtap: 'showAppConfigView'
            },
            subscribeList: {
                disclose: 'disclose'
            },
            logoutButton: {
                tap: 'logout'
            }
        }
    },
    //event
    disclose: function(obj, record, target, index, e, eOpts) {
        var AC = this;
        var _subscribeList = AC.getSubscribeList();
        _subscribeList.setMasked({
            xtype: 'loadmask',
            message: '正在退订...'
        });
        var onSuccess = function(response, opts) {
            var res = Ext.decode(response.responseText);
            var status = res.head.code;
            _subscribeList.unmask();
            if (status === 'ok') {
                var store = _subscribeList.getStore();
                store.remove(record);
//                Ext.Msg.alert('退订成功', response.status, Ext.emptyFn);
            } else {
                Ext.Msg.alert('请求失败', res.head.message, function() {
                    _subscribeList.hide();
                    HERSS.app.getController('TimeLineController').getMainView().hide();
                    HERSS.app.getController('LoginController').launch();
                });
            }
        };
        var onFailure = function(response, opts) {
            _subscribeList.unmask();
            Ext.Msg.alert('请求失败', response.status, Ext.emptyFn);
        };
        Ext.Ajax.request({
            url: HERSS.app.serverURL + 'app/subscribe/' + record.data.appId + '/' + record.data.itemId + '/delete',
            params: {'token': HERSS.UserModel.get('token')},
            method: 'POST',
            success: onSuccess,
            failure: onFailure
        });
    },
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
        if (record.data.callbackUrl) {
            this.getAppConfigView().setHtml('<a href="http://www.baidu.com">test</a>');
            console.log('callback');
        } else {
            this.getAppConfigView().setHtml('<h1 style="text-align:center;padding-top:10px;">此应用暂无订阅信息</h1>');
        }
        this.getAppConfigView().show();
    },
    logout: function() {
        if (HERSS.UserModel) {
            HERSS.UserModel.destroy();
        }
        this.getSubscribeList().hide();
        HERSS.app.getController('TimeLineController').getMainView().hide();
        HERSS.app.getController('LoginController').launch();
    }
});
