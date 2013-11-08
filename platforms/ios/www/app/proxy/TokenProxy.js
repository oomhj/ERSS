Ext.define('HERSS.proxy.TokenProxy', {
    extend: 'Ext.data.proxy.Ajax',
    xtype: 'TokenProxy',
    //overwrite
    config: {
        useDefaultXhrHeader: false
    },
    getExtraParams: function() {
        return {'token': HERSS.UserModel.get('token')};
    }
});