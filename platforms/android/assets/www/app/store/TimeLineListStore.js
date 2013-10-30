Ext.define('HERSS.store.TimeLineListStore',{
    extend:'Ext.data.Store',
    requires:[
        'HERSS.model.TimeLineListModel',
        'HERSS.model.UserModel'
    ],
    config:{
        model: "HERSS.model.TimeLineListModel",
        pageSize: 15,
        autoLoad:true,
        proxy:{
            type: 'ajax',
            useDefaultXhrHeader:false,
            limitParam: 'page.size', //设置limit参数，默认为limit
            pageParam: 'page.page', //设置page参数，默认为page
            extraParams:{'token':HERSS.UserModel.get('token')},
            url:HERSS.app.serverURL+'timeline/',
            reader: {
                type: 'json',
                rootProperty:'body.content'
            }
        }
    }

});