Ext.define('HERSS.store.SubscribeListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.SubscribeModel'
    ],
    config: {
        model: 'HERSS.model.SubscribeModel',
        grouper: {
            sortProperty: 'appId',
            groupFn: function(record) {
                return record.get('appDesc');
            }
        },
        proxy: {
            xtype: 'TokenProxy',
            url: HERSS.app.serverURL + 'app/detailInEachApp/',
            reader: {
                type: 'json',
                rootProperty: 'body'
            }
        }
    }

});