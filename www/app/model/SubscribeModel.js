Ext.define('HERSS.model.SubscribeModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'appId', type: 'string'},
            {name: 'appDesc', type: 'string'},
            {name: 'itemId', type: 'string'},
            {name: 'id', type: 'string'},
            {name: 'name', type: 'string'},
            {name: 'outerId', type: 'string'}
        ]
    }
});