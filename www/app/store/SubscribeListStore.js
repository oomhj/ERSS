Ext.define('HERSS.store.SubscribeListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.AppModel'
    ],
    config: {
        model: 'HERSS.model.AppModel',
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