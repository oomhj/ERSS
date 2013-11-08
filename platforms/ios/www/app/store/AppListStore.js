Ext.define('HERSS.store.AppListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.AppModel',
        'HERSS.proxy.TokenProxy'
    ],
    config: {
        model: 'HERSS.model.AppModel',
        proxy: {
            xtype: 'TokenProxy',
            url: HERSS.app.serverURL + 'app/',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        }
    }
});