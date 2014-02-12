Ext.define('HERSS.store.ShoppingListStore', {
    extend: 'Ext.data.Store',
    requires: [
        'HERSS.model.TimeLineListModel',
        'HERSS.proxy.TokenProxy'
    ],
    config: {
        model: "HERSS.model.TimeLineListModel",
        pageSize: 15,
        proxy: {
            xtype: 'TokenProxy',
            limitParam: 'size', //设置limit参数，默认为limit
//            pageParam: 'page.page', //设置page参数，默认为page
            url: HERSS.app.serverURL + 'timeline/app/life',
            reader: {
                type: 'json',
                rootProperty: 'body.content'
            }
        }
    }
});