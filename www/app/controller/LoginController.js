Ext.define('HERSS.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.LoginView', 'HERSS.view.Main'],
        models: ['HERSS.model.UserModel'],
        refs: {
            MainView: "Main",
            LoginView: "LoginView",
            LoginForm: 'LoginView LoginForm',
            LoginButton: 'LoginView button'
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
                Ext.Viewport.remove(LC.getLoginView());
                if (LC.getMainView() === undefined) {
                    Ext.create('HERSS.view.Main');
                }
                Ext.Viewport.add(LC.getMainView());
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
            if (userInfo.email === HERSS.UserModel.get('email')) {
                console.log('同一用户');
                
            } else {
                console.log('不同用户');
                
            }
        }

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