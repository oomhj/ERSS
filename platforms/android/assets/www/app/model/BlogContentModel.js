Ext.define('HERSS.model.BlogContentModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'content', type: 'string'},
            {name: 'summary', type:'string'},
            {name:'commentCount',type:'int'}
        ]
    }
});