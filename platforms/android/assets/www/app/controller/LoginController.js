Ext.define('HERSS.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config:{
        views:['HERSS.view.LoginView','HERSS.view.Main'],
        models:['HERSS.model.UserModel'],
        refs:{
            LoginView:"LoginView",
            LoginForm: 'LoginView LoginForm',
            LoginButton: 'LoginView button'
        },
        before:{
            showTimeLineList: 'ensureLogin'
        },
        control: {
            LoginButton:{
                tap: 'onLoginButtonTap'
            }
        }
    },
    onLoginButtonTap:function(){
        var form = this.getLoginForm();
        var view = this.getLoginView();
        Ext.Ajax.request({
            url:HERSS.app.serverURL+'login',
            //'data/login.json',
            method :'POST',
            params: Ext.urlEncode(form.getValues(true)),
            success: function(response, opts) {
                var obj = Ext.decode(response.responseText);
                var status = obj.head.code;
                if(status==='ok'){
                    HERSS.UserModel = Ext.create('HERSS.model.UserModel',obj.body);
                    Ext.Viewport.remove(view);
                    Ext.Viewport.add({xtype:'Main'});
                }else{
                    Ext.Msg.alert('登录失败',obj.head.message, Ext.emptyFn);
                }

            },
            failure: function(response, opts) {
                Ext.Msg.alert('请求失败',response.status, Ext.emptyFn);
            }
        });
    },
    //life circle
    init: function() {
        this.callParent();
        this.LoginView = {xtype:'LoginView'};
    },
    launch: function() {
        Ext.Viewport.add(this.LoginView);
    }

});