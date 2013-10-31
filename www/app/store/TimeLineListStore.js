Ext.define('HERSS.store.TimeLineListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.TimeLineListModel'
    ],
    config: {
        model: "HERSS.model.TimeLineListModel",
        pageSize: 15
    }
});