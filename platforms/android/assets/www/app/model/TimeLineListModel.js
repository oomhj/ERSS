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
                model: 'HERSS.model.meta',
                name: 'meta'
            },
            {
                type: 'hasOne',
                model: 'HERSS.model.app',
                name: 'app'
            }
        ]
    }

})
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

Ext.define('HERSS.model.meta', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'title', type: 'string'},
            {name: 'summary', type: 'string'},
            {name: 'thumb', type: 'string'},
            {name: 'timestamp', type: 'string'}
        ]
    }
});
Ext.define('HERSS.model.app', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'string'},
            {name: 'name', type: 'string'}
        ]
    }
});