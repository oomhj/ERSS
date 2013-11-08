Ext.define('HERSS.model.BlogContentModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'content', type: 'string'},
            {name: 'title', type:'string'},
            {name:'commentCount',type:'int'}
        ]
    }
});