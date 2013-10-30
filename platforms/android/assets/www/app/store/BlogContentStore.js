Ext.define('HERSS.store.BlogContentStore', {
    extend: 'Ext.data.Store',
    requires:[
        'HERSS.model.BlogContentModel'
    ],
    config: {
        model:'HERSS.model.BlogContentModel'
    }
})