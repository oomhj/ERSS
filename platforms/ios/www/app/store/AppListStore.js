Ext.define('HERSS.store.AppListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.AppModel'
    ],
    config: {
        model: 'HERSS.model.AppModel',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            useDefaultXhrHeader: false,
            extraParams: {'token': HERSS.UserModel.get('token')},
            url: HERSS.app.serverURL + 'app/detailInEachApp/',
            reader: {
                type: 'json',
                rootProperty: 'body'
            }
        },
        grouper: {
            sortProperty: 'appId',
            groupFn: function(record) {
                return record.get('appDesc');
            }
        }
    }

});