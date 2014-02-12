Ext.define('HERSS.model.AppModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'alias', type:'string'},
            {name:'desc',type:'string'},
            {name:'vendor',type:'string'},
            {name:'callbackUrl',type:'string'}
        ]
    }
});