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
            {name: 'timestamp', type: 'int'}
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