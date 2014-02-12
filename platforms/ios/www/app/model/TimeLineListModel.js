Ext.define('HERSS.model.TimeLineListModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'postId', type: 'string'}
        ],
        associations: [
            {
                type: 'hasOne',
                model: 'HERSS.model.author',
                name: 'author'
            },
            {
                type: 'hasOne',
                model: 'HERSS.model.post',
                name: 'post'
            },
            {
                type: 'hasOne',
                model: 'HERSS.model.app',
                name: 'app'
            }
        ]
    }

});
Ext.define('HERSS.model.author', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'uid', type: 'string'},
            {name: 'name', type: 'string'},
            {name: 'avatar', type: 'string'},
            {name: 'title', type: 'string'}
        ]
    }
});

Ext.define('HERSS.model.post', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'summary', type: 'string'},
            {name: 'thumbnail', type: 'string'},
            {
                name: 'timestamp',
                type: 'date',
                convert: function(value, record) {
                    var date = new Date(value);
                    var date2str = function(x, y) {
                        var z = {M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds()};
                        y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
                            return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2);
                        });
                        return y.replace(/(y+)/g, function(v) {
                            return x.getFullYear().toString().slice(-v.length);
                        });
                    };
                    return(date2str(date, "yy/M/d h:m"));
                }
            }
        ]
    }
});
Ext.define('HERSS.model.app', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'desc', type: 'string'}
        ]
    }
});