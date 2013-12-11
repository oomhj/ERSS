Ext.define('HERSS.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        views: ['HERSS.view.LoginView', 'HERSS.view.Main'],
        models: ['HERSS.model.UserModel'],
        refs: {
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
                var TC = HERSS.app.getController('TimeLineController');
                Ext.Viewport.getAt(0).hide(true);
                TC.launch();
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
        if (!HERSS.UserModel) {
            HERSS.UserModel = Ext.create('HERSS.model.UserModel', userInfo);
        } else {
            HERSS.UserModel.setData(userInfo);
        }
    },
    //life circle
    launch: function() {
        console.log('LC-launch');
        if (!this.getLoginView()) {
            console.log('creat-LoginView');
            Ext.Viewport.add(Ext.create("HERSS.view.LoginView"));
        } else {
            Ext.Viewport.getAt(0).show();
        }
    }

});