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
                html: 'HERSS'
            },
            {
                xtype: 'LoginForm',
                scrollable: null
            },
            {
                xtype: 'button',
                name: 'login',
                id: 'login',
                text: '登录',
                style: 'margin-left:auto;margin-right:auto;',
                ui: 'action',
                width: 150
            },
            { xtype: 'spacer' }
        ]
    }
});
