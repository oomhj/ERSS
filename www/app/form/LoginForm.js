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
                        value:'haojie.ma@hand-china.com'
                        //frank.fan@hand-china.com haojie.ma@hand-china.com
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'encPassword',
                        label: '密码',
                        value:'hand3752'

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