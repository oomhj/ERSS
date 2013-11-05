Ext.define('HERSS.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.LoginView', 'HERSS.view.Main'],
        models: ['HERSS.model.UserModel'],
        refs: {
            MainView: "Main",
            LoginView: "LoginView",
            LoginForm: 'LoginView LoginForm',
            LoginButton: 'LoginView button',
            TimeLineList: 'TimeLineList',
            ShoppingList: 'ShoppingList',
            AppList: 'AppList'
        },
        before: {
//            onLoginButtonTap: 'clearStore'
        },
        control: {
            LoginButton: {
                tap: 'onLoginButtonTap'
            }
        }
    },
    onLoginButtonTap: function() {
        var LC = this;
        var onSuccess = function(response, opts) {
            var obj = Ext.decode(response.responseText);
            var status = obj.head.code;
            if (status === 'ok') {
                LC.updateUserInfo(obj.body);
                LC.getLoginView().hide(true);
                if (LC.getMainView() === undefined) {
                    LC.creatMain();
                }
                Ext.Viewport.add(LC.getMainView());
                LC.getMainView().show(true);

            } else {
                Ext.Msg.alert('登录失败', obj.head.message, Ext.emptyFn);
            }
        };
        var onFailure = function(response, opts) {
            Ext.Msg.alert('请求失败', response.status, Ext.emptyFn);
        };
        Ext.Ajax.request({
            url: HERSS.app.serverURL + 'login',
            method: 'POST',
            params: Ext.urlEncode(LC.getLoginForm().getValues(true)),
            success: onSuccess,
            failure: onFailure
        });
    },
    updateUserInfo: function(userInfo) {
        if (HERSS.UserModel === undefined) {
            HERSS.UserModel = Ext.create('HERSS.model.UserModel', userInfo);
        } else {
            HERSS.UserModel.setData(userInfo);
        }

    },
    creatMain: function() {
        Ext.create('HERSS.view.Main');
        var token = HERSS.UserModel.get('token');
        var proxy = Ext.create('Ext.data.proxy.Ajax', {
            useDefaultXhrHeader: false,
            limitParam: 'page.size', //设置limit参数，默认为limit
            pageParam: 'page.page', //设置page参数，默认为page
            extraParams: {'token': token},
            url: HERSS.app.serverURL + 'timeline/',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        });
        this.getTimeLineList().getStore().setProxy(proxy);
        proxy = Ext.create('Ext.data.proxy.Ajax', {
            useDefaultXhrHeader: false,
            limitParam: 'page.size', //设置limit参数，默认为limit
            pageParam: 'page.page', //设置page参数，默认为page
            extraParams: {'token': token},
            url: HERSS.app.serverURL + 'timeline/app/shopping',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        });
        this.getShoppingList().getStore().setProxy(proxy);
        proxy = Ext.create('Ext.data.proxy.Ajax', {
            type: 'ajax',
            useDefaultXhrHeader: false,
            extraParams: {'token': token},
            url: HERSS.app.serverURL + 'app/detailInEachApp/',
            reader: {
                type: 'json',
                rootProperty: 'body'
            }
        });
        this.getAppList().getStore().setProxy(proxy);

        this.getTimeLineList().getStore().load();
        this.getShoppingList().getStore().load();
        this.getAppList().getStore().load();

    },
    //life circle
    init: function() {
        this.callParent();
        Ext.create("HERSS.view.LoginView");
    },
    launch: function() {
        Ext.Viewport.add(this.getLoginView());
    }

});