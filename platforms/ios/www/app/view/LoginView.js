Ext.define('HERSS.view.LoginView', {
    extend: 'Ext.Container',
    xtype: 'LoginView',
    requires: ['HERSS.form.LoginForm'],
    config: {
        layout: 'vbox',
        align: 'center',
        scrollable: null,
        items: [
            { xtype: 'spacer' },
            {
                xtype: 'panel',
                style: 'text-align:center;font-size: 24pt;',
                html: '企业信息聚合'
            },
            { xtype: 'spacer' },
            {
                xtype: 'LoginForm',
                scrollable: null
            },{ xtype: 'spacer' },
            {
                xtype: 'button',
                name: 'login',
                id: 'login',
                text: '登录',
                style: 'margin-left:auto;margin-right:auto;',
                width: 150
            },
            { xtype: 'spacer' }
        ]
    }
});
