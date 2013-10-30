Ext.define('HERSS.model.UserModel', {
    extend: 'Ext.data.Model',
    xtype: 'UserModel',
    config: {
        fields: [
            {name: 'token', type: 'string'},
            {name: 'deviceType', type: 'string'},
            {name: 'email', type: 'string'}
        ],
        associations: [
            {
                type: 'hasOne',
                model: 'HERSS.model.user',
                name: 'user'
            }
        ]
    }
});
Ext.define('HERSS.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'name', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'avatar', type: 'string'},
            {name: 'email', type: 'string'},
            {name: 'title', type: 'string'}
        ]
    }
});
