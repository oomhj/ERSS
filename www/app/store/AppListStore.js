Ext.define('HERSS.store.AppListStore', {
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
        }
    }

});