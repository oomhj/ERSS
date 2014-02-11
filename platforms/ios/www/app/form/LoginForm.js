Ext.define('HERSS.form.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'LoginForm',
    requires: ['Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Password','Ext.field.Hidden' ],
    config: {
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'emailfield',
                        name: 'email',
                        label: '邮箱',
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'encPassword',
                        label: '密码',

                    },
                    {
                        xtype: 'hiddenfield',
                        name: 'deviceType',
                        value: 'iphone'
                    }
                ]
            }
        ]
    }
});