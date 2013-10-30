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
                        value:'frank.fan@hand-china.com'
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'encPassword',
                        label: '密码',
                        value:1

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